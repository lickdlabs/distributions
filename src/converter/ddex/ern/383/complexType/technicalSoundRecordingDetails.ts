import { Ern383, Ern411 } from "../../../../../types";
import { convertAudioCodecType } from "./audioCodecType";
import { convertBitRate } from "./bitRate";
import { convertFile } from "./file";
import { convertFingerprint } from "./fingerprint";
import { convertSamplingRate } from "./samplingRate";
import { convertSoundRecordingPreviewDetails } from "./soundRecordingPreviewDetails";

export const convertTechnicalSoundRecordingDetails = (
  technicalSoundRecordingDetails: Ern383.TechnicalSoundRecordingDetails,
): Ern411.TechnicalSoundRecordingDetails => ({
  _attributes: technicalSoundRecordingDetails._attributes
    ? {
        languageAndScriptCode:
          technicalSoundRecordingDetails._attributes?.languageAndScriptCode,
        applicableTerritoryCode: undefined,
        isDefault: undefined,
      }
    : undefined,
  technicalResourceDetailsReference:
    technicalSoundRecordingDetails.technicalResourceDetailsReference,
  audioCodecType: technicalSoundRecordingDetails.audioCodecType
    ? convertAudioCodecType(technicalSoundRecordingDetails.audioCodecType)
    : undefined,
  bitRate: technicalSoundRecordingDetails.bitRate
    ? convertBitRate(technicalSoundRecordingDetails.bitRate)
    : undefined,
  originalBitRate: undefined,
  numberOfChannels: technicalSoundRecordingDetails.numberOfChannels,
  samplingRate: technicalSoundRecordingDetails.samplingRate
    ? convertSamplingRate(technicalSoundRecordingDetails.samplingRate)
    : undefined,
  originalSamplingRate: undefined,
  bitsPerSample: technicalSoundRecordingDetails.bitsPerSample,
  duration: technicalSoundRecordingDetails.duration,
  bitDepth: undefined,
  isPreview: technicalSoundRecordingDetails.isPreview,
  previewDetails: technicalSoundRecordingDetails.previewDetails
    ? convertSoundRecordingPreviewDetails(
        technicalSoundRecordingDetails.previewDetails,
      )
    : undefined,
  file: technicalSoundRecordingDetails.file
    ? convertFile(technicalSoundRecordingDetails.file[0])
    : undefined,
  fingerprint: technicalSoundRecordingDetails.fingerprint?.map((fingerprint) =>
    convertFingerprint(fingerprint),
  ),
});
