import { Avs411, Ern383, Ern411 } from "../../../../../types";

export const convertParentalWarningTypeWithTerritory = (
  parentalWarningType: Ern383.ParentalWarningType,
): Ern411.ParentalWarningTypeWithTerritory => ({
  _attributes: parentalWarningType._attributes
    ? {
        namespace: parentalWarningType._attributes.namespace,
        applicableTerritoryCode: undefined,
        userDefinedValue: parentalWarningType._attributes.userDefinedValue,
        isDefault: undefined,
      }
    : undefined,
  value: parentalWarningType.value as unknown as Avs411.ParentalWarningType,
});
