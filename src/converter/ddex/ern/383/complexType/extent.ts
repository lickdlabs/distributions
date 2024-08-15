import { Ern383, Ern411 } from "../../../../../types";

export const convertExtent = (extent: Ern383.Extent): Ern411.Extent => ({
  _attributes: extent._attributes
    ? {
        unitOfMeasure: extent._attributes.unitOfMeasure,
      }
    : undefined,
  value: extent.value,
});
