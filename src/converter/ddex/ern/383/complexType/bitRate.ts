import { Ern383, Ern411 } from "../../../../../types";

export const convertBitRate = (bitRate: Ern383.BitRate): Ern411.BitRate => ({
  _attributes: bitRate._attributes
    ? {
        unitOfMeasure: bitRate._attributes.unitOfMeasure,
      }
    : undefined,
  value: bitRate.value,
});
