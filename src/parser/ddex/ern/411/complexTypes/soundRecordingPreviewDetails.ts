import { Ern411 } from "../../../../../types";
import { convertDurationToMilliseconds } from "../../../../../utils";

export const parseSoundRecordingPreviewDetails = (
  object: any,
): Ern411.SoundRecordingPreviewDetails => ({
  startPoint: object.StartPoint ? parseFloat(object.StartPoint[0]) : undefined,
  endPoint: object.EndPoint ? parseFloat(object.EndPoint[0]) : undefined,
  duration: object.Duration
    ? convertDurationToMilliseconds(object.Duration[0])
    : undefined,
  topLeftCorner: object.TopLeftCorner ? object.TopLeftCorner[0] : undefined,
  bottomRightCorner: object.BottomRightCorner
    ? object.BottomRightCorner[0]
    : undefined,
  expressionType: object.ExpressionType[0],
});
