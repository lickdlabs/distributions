import { Ern382 } from "../../../../../types";
import { parseDescription } from "./description";

export const parsePreviewDetails = (object: any): Ern382.PreviewDetails => ({
  partType: object.PartType ? parseDescription(object.PartType[0]) : undefined,
  topLeftCorner: object.TopLeftCorner
    ? parseFloat(object.TopLeftCorner[0])
    : undefined,
  bottomRightCorner: object.BottomRightCorner
    ? parseFloat(object.BottomRightCorner[0])
    : undefined,
  expressionType: object.ExpressionType[0],
});
