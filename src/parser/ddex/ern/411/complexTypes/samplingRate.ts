import { Ern411 } from "../../../../../types";

export const parseSamplingRate = (object: any): Ern411.SamplingRate => ({
  _attributes: object.$
    ? {
        unitOfMeasure: object.$.UnitOfMeasure || undefined,
      }
    : undefined,
  value: parseFloat(object.$ ? object._ : object),
});
