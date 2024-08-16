import { Ern383 } from "../../../../../types";

export const parseSamplingRate = (object: any): Ern383.SamplingRate => ({
  _attributes: object.$
    ? {
        unitOfMeasure: object.$.UnitOfMeasure || undefined,
      }
    : undefined,
  value: parseFloat(object._ || object),
});
