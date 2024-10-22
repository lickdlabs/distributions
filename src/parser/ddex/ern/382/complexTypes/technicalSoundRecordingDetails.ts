import { Ern382 } from "../../../../../types";
import { parseDuration } from "../../utils";
import { parseAudioCodecType } from "./audioCodecType";
import { parseBitRate } from "./bitRate";
import { parseContainerFormat } from "./containerFormat";
import { parseDrmPlatformType } from "./drmPlatformType";
import { parseFileChoice } from "./fileChoice";
import { parseFingerprint } from "./fingerprint";
import { parseFulfillmentDate } from "./fulfillmentDate";
import { parseSamplingRate } from "./samplingRate";
import { parseSoundRecordingPreviewDetails } from "./soundRecordingPreviewDetails";

export const parseTechnicalSoundRecordingDetails = (
  object: any,
): Ern382.TechnicalSoundRecordingDetails => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  technicalResourceDetailsReference:
    object.TechnicalResourceDetailsReference[0],
  drmPlatformType: object.DrmPlatformType
    ? parseDrmPlatformType(object.DrmPlatformType[0])
    : undefined,
  containerFormat: object.ContainerFormat
    ? parseContainerFormat(object.ContainerFormat[0])
    : undefined,
  audioCodecType: object.AudioCodecType
    ? parseAudioCodecType(object.AudioCodecType[0])
    : undefined,
  bitRate: object.BitRate ? parseBitRate(object.BitRate[0]) : undefined,
  numberOfChannels: object.NumberOfChannels
    ? parseInt(object.NumberOfChannels[0])
    : undefined,
  samplingRate: object.SamplingRate
    ? parseSamplingRate(object.SamplingRate[0])
    : undefined,
  bitsPerSample: object.BitsPerSample
    ? parseInt(object.BitsPerSample[0])
    : undefined,
  duration: object.Duration
    ? parseDuration(object.Duration[0])
    : undefined,
  resourceProcessingRequired: object.ResourceProcessingRequired
    ? object.ResourceProcessingRequired[0] === "true"
    : undefined,
  usableResourceDuration: object.UsableResourceDuration
    ? parseDuration(object.UsableResourceDuration[0])
    : undefined,
  isPreview: object.IsPreview ? object.IsPreview[0] === "true" : undefined,
  previewDetails: object.PreviewDetails
    ? parseSoundRecordingPreviewDetails(object.PreviewDetails[0])
    : undefined,
  fulfillmentDate: object.FulfillmentDate
    ? parseFulfillmentDate(object.FulfillmentDate[0])
    : undefined,
  consumerFulfillmentDate: object.ConsumerFulfillmentDate
    ? parseFulfillmentDate(object.ConsumerFulfillmentDate[0])
    : undefined,
  ...parseFileChoice(object),
  fingerprint: object.Fingerprint
    ? object.Fingerprint.map((fingerprint: any) =>
        parseFingerprint(fingerprint),
      )
    : undefined,
});
