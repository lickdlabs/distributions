import { Ern382 } from "../../../../../types";

export const parseAllTerritoryCode = (
  object: any,
): Ern382.AllTerritoryCode => ({
  _attributes: object.$
    ? {
        identifierType: object.$.IdentifierType || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
