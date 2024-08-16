import { Ern382 } from "../../../../../types";

export const parseSamplingRate = (object: any): Ern382.SamplingRate => ({
  _attributes: object.$
    ? {
        unitOfMeasure: object.$.UnitOfMeasure || undefined,
      }
    : undefined,
  value: parseFloat(object._ || object),
});
