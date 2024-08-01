import { Ern411 } from "../../../../../types";
import { convertDurationToMilliseconds } from "../../../../../utils";
import { parseFile } from "./file";

export const parseTechnicalSoundRecordingDetails = (
  object: any,
): Ern411.TechnicalSoundRecordingDetails => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
        applicableTerritoryCode: object.$.ApplicableTerritoryCode || undefined,
        isDefault: object.$.IsDefault
          ? object.$.IsDefault === "true"
          : undefined,
      }
    : undefined,
  technicalResourceDetailsReference:
    object.TechnicalResourceDetailsReference[0],
  // @todo <xs:element name="AudioCodecType" minOccurs="0" type="ern:AudioCodecType" />
  // @todo <xs:element name="BitRate" minOccurs="0" type="ern:BitRate" />
  // @todo <xs:element name="OriginalBitRate" minOccurs="0" type="ern:BitRate" />
  numberOfChannels: object.NumberOfChannels
    ? parseInt(object.NumberOfChannels[0])
    : undefined,
  // @todo <xs:element name="SamplingRate" minOccurs="0" type="ern:SamplingRate" />
  // @todo <xs:element name="OriginalSamplingRate" minOccurs="0" type="ern:SamplingRate" />
  bitsPerSample: object.BitsPerSample
    ? parseInt(object.BitsPerSample[0])
    : undefined,
  duration: object.Duration
    ? convertDurationToMilliseconds(object.Duration[0])
    : undefined,
  bitDepth: object.BitDepth ? parseInt(object.BitDepth[0]) : undefined,
  isPreview: object.IsPreview ? object.IsPreview[0] === "true" : undefined,
  // @todo <xs:element name="PreviewDetails" minOccurs="0" type="ern:SoundRecordingPreviewDetails" />
  file: object.File ? parseFile(object.File[0]) : undefined,
  // @todo <xs:element name="Fingerprint" minOccurs="0" maxOccurs="unbounded" type="ern:Fingerprint" />
});
