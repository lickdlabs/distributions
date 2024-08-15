import { Avs411, Ern383, Ern411 } from "../../../../../types";

export const convertImageType = (
  imageType: Ern383.ImageType,
): Ern411.ImageType => ({
  _attributes: imageType._attributes
    ? {
        namespace: imageType._attributes.namespace,
        userDefinedValue: imageType._attributes.userDefinedValue,
      }
    : undefined,
  value: imageType.value as unknown as Avs411.ImageType,
});
