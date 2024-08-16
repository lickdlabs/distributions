import { Avs411, Ern383, Ern411 } from "../../../../../types";

export const convertPreviewDetails = (
  previewDetails: Ern383.PreviewDetails,
): Ern411.PreviewDetails => ({
  topLeftCorner:
    previewDetails.topLeftCorner as Ern411.PreviewDetails["topLeftCorner"],
  bottomRightCorner:
    previewDetails.bottomRightCorner as Ern411.PreviewDetails["bottomRightCorner"],
  expressionType:
    previewDetails.expressionType as unknown as Avs411.ExpressionType,
});
