import { Ern383, Ern411 } from "../../../../../types";

export const convertCarrierType = (
  carrierType: Ern383.CarrierType,
): Ern411.CarrierType => ({
  _attributes: carrierType._attributes
    ? {
        namespace: carrierType._attributes.namespace,
        userDefinedValue: carrierType._attributes.userDefinedValue,
      }
    : undefined,
  value: carrierType.value,
});
