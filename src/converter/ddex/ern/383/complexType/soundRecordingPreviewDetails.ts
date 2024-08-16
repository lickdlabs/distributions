import { Ern382, Ern411 } from "../../../../../types";

export const convertSoundRecordingPreviewDetails = (
  soundRecordingPreviewDetails: Ern382.SoundRecordingPreviewDetails,
): Ern411.SoundRecordingPreviewDetails => ({
  startPoint: soundRecordingPreviewDetails.startPoint,
  endPoint: soundRecordingPreviewDetails.endPoint,
  duration: soundRecordingPreviewDetails.duration,
  topLeftCorner:
    soundRecordingPreviewDetails.topLeftCorner as Ern411.PreviewDetails["topLeftCorner"],
  bottomRightCorner:
    soundRecordingPreviewDetails.bottomRightCorner as Ern411.PreviewDetails["bottomRightCorner"],
  expressionType: soundRecordingPreviewDetails.expressionType,
});
