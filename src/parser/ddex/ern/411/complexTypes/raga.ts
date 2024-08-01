import { Ern411 } from "../../../../../types";

export const parseRaga = (object: any): Ern411.Raga => ({
  _attributes: object.$
    ? {
        applicableTerritoryCode: object.$.ApplicableTerritoryCode || undefined,
        isDefault: object.$.IsDefault
          ? object.$.IsDefault === "true"
          : undefined,
      }
    : undefined,
  value: object._ || object,
});
