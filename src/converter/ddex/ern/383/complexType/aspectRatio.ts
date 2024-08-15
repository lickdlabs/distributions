import { Avs411, Ern382, Ern411 } from "../../../../../types";

export const convertAspectRatio = (
  aspectRatio: Ern382.AspectRatio,
): Ern411.AspectRatio => ({
  _attributes: aspectRatio._attributes
    ? {
        aspectRatioType: aspectRatio._attributes
          .aspectRatioType as unknown as Avs411.AspectRatioType,
      }
    : undefined,
  value: aspectRatio.value,
});
