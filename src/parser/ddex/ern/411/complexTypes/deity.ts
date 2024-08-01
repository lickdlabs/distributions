import { Ern411 } from "../../../../../types";

export const parseDeity = (object: any): Ern411.Deity => ({
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
