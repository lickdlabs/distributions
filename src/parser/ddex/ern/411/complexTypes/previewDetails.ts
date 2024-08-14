import { Ern411 } from "../../../../../types";

export const parsePreviewDetails = (object: any): Ern411.PreviewDetails => ({
  topLeftCorner: object.TopLeftCorner ? object.TopLeftCorner[0] : undefined,
  bottomRightCorner: object.BottomRightCorner
    ? object.BottomRightCorner[0]
    : undefined,
  expressionType: object.ExpressionType[0],
});
