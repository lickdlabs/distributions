import { Ern411 } from "../../../../../types";

export const parseAllTerritoryCode = (
  object: any,
): Ern411.AllTerritoryCode => ({
  _attributes: object.$
    ? {
        identifierType: object.$.IdentifierType || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
