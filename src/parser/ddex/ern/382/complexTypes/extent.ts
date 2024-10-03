import { Ern382 } from "../../../../../types";

export const parseExtent = (object: any): Ern382.Extent => ({
  _attributes: object.$
    ? {
        unitOfMeasure: object.$.UnitOfMeasure || undefined,
      }
    : undefined,
  value: parseFloat(object.$ ? object._ : object),
});
