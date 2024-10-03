import { Ern383 } from "../../../../../types";

export const parseBitRate = (object: any): Ern383.BitRate => ({
  _attributes: object.$
    ? {
        unitOfMeasure: object.$.UnitOfMeasure || undefined,
      }
    : undefined,
  value: parseFloat(object.$ ? object._ : object),
});
