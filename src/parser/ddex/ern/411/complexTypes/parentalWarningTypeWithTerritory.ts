import { Ern411 } from "../../../../../types";

export const parseParentalWarningTypeWithTerritory = (
  object: any,
): Ern411.ParentalWarningTypeWithTerritory => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        applicableTerritoryCode: object.$.ApplicableTerritoryCode || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
        isDefault: object.$.IsDefault
          ? object.$.IsDefault === "true"
          : undefined,
      }
    : undefined,
  value: object._ || object,
});
