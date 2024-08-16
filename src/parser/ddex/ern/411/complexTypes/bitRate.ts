import { Ern411 } from "../../../../../types";

export const parseBitRate = (object: any): Ern411.BitRate => ({
  _attributes: object.$
    ? {
        unitOfMeasure: object.$.UnitOfMeasure || undefined,
      }
    : undefined,
  value: parseFloat(object._ || object),
});
