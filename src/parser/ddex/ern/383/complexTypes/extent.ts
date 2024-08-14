import { Ern383 } from "../../../../../types";

export const parseExtent = (object: any): Ern383.Extent => ({
  _attributes: object.$
    ? {
        unitOfMeasure: object.$.UnitOfMeasure || undefined,
      }
    : undefined,
  value: parseFloat(object._ || object),
});
