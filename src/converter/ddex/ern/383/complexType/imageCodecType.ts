import { Ern383, Ern411 } from "../../../../../types";

export const convertImageCodecType = (
  imageCodecType: Ern383.ImageCodecType,
): Ern411.ImageCodecType => ({
  _attributes: imageCodecType._attributes
    ? {
        version: imageCodecType._attributes.version,
        namespace: imageCodecType._attributes.namespace,
        userDefinedValue: imageCodecType._attributes.userDefinedValue,
      }
    : undefined,
  value: imageCodecType.value,
});
