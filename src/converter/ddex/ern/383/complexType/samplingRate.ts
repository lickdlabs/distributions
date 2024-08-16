import { Ern382, Ern411 } from "../../../../../types";

export const convertSamplingRate = (
  samplingRate: Ern382.SamplingRate,
): Ern411.SamplingRate => ({
  _attributes: samplingRate._attributes
    ? {
        unitOfMeasure: samplingRate._attributes.unitOfMeasure,
      }
    : undefined,
  value: samplingRate.value,
});
