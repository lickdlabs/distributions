import { ParserError } from "../../../../errors";
import { Ern43, ErnVersions } from "../../../../types";
import { parseNewReleaseMessage } from "../411/elements/newReleaseMessage";
import { parsePurgeReleaseMessage } from "../411/elements/purgeReleaseMessage";

// ERN 4.3 documents are parsed using the ERN 4.1.1 element parsers. xml2js
// surfaces the full raw object tree so any 4.3-only fields are simply ignored
// by the 4.1.1 parsers, which only read the fields they know about. The
// version tag on the returned envelope is rewritten to ERN_43 so downstream
// converters can route correctly.
//
// However, ERN 4.3 relocated a handful of fields into a SoundRecordingEdition
// wrapper inside SoundRecording (ResourceId, PLine, TechnicalDetails). The
// 4.1.1 parser expects those at SoundRecording level, so we normalise the
// parsed object tree before delegating. ERN 4.3 also wraps the technical
// audio fields (File, AudioCodecType, BitRate, etc.) inside a DeliveryFile
// element under TechnicalDetails; we flatten those back up too.
export const parse43 = (action: string, object: any): Ern43.Ern => {
  switch (action) {
    case "NewReleaseMessage":
      return {
        ...parseNewReleaseMessage(normaliseSoundRecordings(object)),
        version: ErnVersions.ERN_43,
        action: Ern43.Actions.NEW_RELEASE_MESSAGE,
      };

    case "PurgeReleaseMessage":
      return {
        ...parsePurgeReleaseMessage(object),
        version: ErnVersions.ERN_43,
        action: Ern43.Actions.PURGE_RELEASE_MESSAGE,
      };
  }

  throw new ParserError({
    version: ErnVersions.ERN_43,
    action,
    message: "unknown/unsupported action",
  });
};

const LIFTED_EDITION_FIELDS = [
  "ResourceId",
  "PLine",
  "TechnicalDetails",
] as const;

const LIFTED_DELIVERY_FILE_FIELDS = [
  "AudioCodecType",
  "BitRate",
  "OriginalBitRate",
  "NumberOfChannels",
  "SamplingRate",
  "OriginalSamplingRate",
  "BitsPerSample",
  "Duration",
  "BitDepth",
  "File",
  "Fingerprint",
  "IsProvidedInDelivery",
] as const;

const normaliseSoundRecordings = (object: any): any => {
  const soundRecordings = object?.ResourceList?.[0]?.SoundRecording;

  if (!Array.isArray(soundRecordings)) {
    return object;
  }

  for (const soundRecording of soundRecordings) {
    liftEditionFields(soundRecording);
    liftDeliveryFileFields(soundRecording);
  }

  return object;
};

const liftEditionFields = (soundRecording: any): void => {
  const editions = soundRecording?.SoundRecordingEdition;

  if (!Array.isArray(editions)) {
    return;
  }

  for (const field of LIFTED_EDITION_FIELDS) {
    const lifted: any[] = [];

    for (const edition of editions) {
      if (Array.isArray(edition[field])) {
        lifted.push(...edition[field]);
      }
    }

    if (lifted.length > 0 && !soundRecording[field]) {
      soundRecording[field] = lifted;
    }
  }
};

// The 4.1.1 parser reads File/AudioCodecType/etc. directly off TechnicalDetails.
// In 4.3 they live inside DeliveryFile, so merge the first DeliveryFile's fields
// up onto TechnicalDetails. Multiple DeliveryFile entries per TechnicalDetails
// are not currently supported by the 4.1.1 shim.
const liftDeliveryFileFields = (soundRecording: any): void => {
  const technicalDetails = soundRecording?.TechnicalDetails;

  if (!Array.isArray(technicalDetails)) {
    return;
  }

  for (const detail of technicalDetails) {
    const deliveryFile = Array.isArray(detail?.DeliveryFile)
      ? detail.DeliveryFile[0]
      : undefined;

    if (!deliveryFile) {
      continue;
    }

    for (const field of LIFTED_DELIVERY_FILE_FIELDS) {
      if (deliveryFile[field] !== undefined && detail[field] === undefined) {
        detail[field] = deliveryFile[field];
      }
    }
  }
};
