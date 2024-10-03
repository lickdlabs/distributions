import { Ern411 } from "../../../../../types";

export const parseExtent = (object: any): Ern411.Extent => ({
  _attributes: object.$
    ? {
        unitOfMeasure: object.$.UnitOfMeasure || undefined,
      }
    : undefined,
  value: parseFloat(object.$ ? object._ : object),
});
