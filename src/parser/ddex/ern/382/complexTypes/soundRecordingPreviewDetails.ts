import { Ern382 } from "../../../../../types";
import { parseDuration } from "../../utils";
import { parseDescription } from "./description";

export const parseSoundRecordingPreviewDetails = (
  object: any,
): Ern382.SoundRecordingPreviewDetails => ({
  partType: object.PartType ? parseDescription(object.PartType[0]) : undefined,
  startPoint: object.StartPoint ? parseFloat(object.StartPoint[0]) : undefined,
  endPoint: object.EndPoint ? parseFloat(object.EndPoint[0]) : undefined,
  duration: object.Duration
    ? parseDuration(object.Duration[0])
    : undefined,
  topLeftCorner: object.TopLeftCorner
    ? parseFloat(object.TopLeftCorner[0])
    : undefined,
  bottomRightCorner: object.BottomRightCorner
    ? parseFloat(object.BottomRightCorner[0])
    : undefined,
  expressionType: object.ExpressionType[0],
});
