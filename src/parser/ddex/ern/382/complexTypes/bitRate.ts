import { Ern382 } from "../../../../../types";

export const parseBitRate = (object: any): Ern382.BitRate => ({
  _attributes: object.$
    ? {
        unitOfMeasure: object.$.UnitOfMeasure || undefined,
      }
    : undefined,
  value: parseFloat(object.$ ? object._ : object),
});
