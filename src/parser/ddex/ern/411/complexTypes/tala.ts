import { Ern411 } from "../../../../../types";

export const parseTala = (object: any): Ern411.Tala => ({
  _attributes: object.$
    ? {
        applicableTerritoryCode: object.$.ApplicableTerritoryCode || undefined,
        isDefault: object.$.IsDefault
          ? object.$.IsDefault === "true"
          : undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
