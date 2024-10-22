import { Ern411 } from "../../../../../types";
import { parseDuration } from "../../utils";
import { parseSoundRecordingPreviewDetails } from "./soundRecordingPreviewDetails";
import { parseAudioCodecType } from "./audioCodecType";
import { parseBitRate } from "./bitRate";
import { parseFile } from "./file";
import { parseFingerprint } from "./fingerprint";
import { parseSamplingRate } from "./samplingRate";

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
  audioCodecType: object.AudioCodecType
    ? parseAudioCodecType(object.AudioCodecType[0])
    : undefined,
  bitRate: object.BitRate ? parseBitRate(object.BitRate[0]) : undefined,
  originalBitRate: object.OriginalBitRate
    ? parseBitRate(object.OriginalBitRate[0])
    : undefined,
  numberOfChannels: object.NumberOfChannels
    ? parseInt(object.NumberOfChannels[0])
    : undefined,
  samplingRate: object.SamplingRate
    ? parseSamplingRate(object.SamplingRate[0])
    : undefined,
  originalSamplingRate: object.OriginalSamplingRate
    ? parseSamplingRate(object.OriginalSamplingRate[0])
    : undefined,
  bitsPerSample: object.BitsPerSample
    ? parseInt(object.BitsPerSample[0])
    : undefined,
  duration: object.Duration
    ? parseDuration(object.Duration[0])
    : undefined,
  bitDepth: object.BitDepth ? parseInt(object.BitDepth[0]) : undefined,
  isPreview: object.IsPreview ? object.IsPreview[0] === "true" : undefined,
  previewDetails: object.PreviewDetails
    ? parseSoundRecordingPreviewDetails(object.PreviewDetails[0])
    : undefined,
  file: object.File ? parseFile(object.File[0]) : undefined,
  fingerprint: object.Fingerprint
    ? object.Fingerprint.map((fingerprint: any) =>
        parseFingerprint(fingerprint),
      )
    : undefined,
});
