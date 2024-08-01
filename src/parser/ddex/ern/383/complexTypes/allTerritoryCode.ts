import { Ern383 } from "../../../../../types";

export const parseAllTerritoryCode = (
  object: any,
): Ern383.AllTerritoryCode => ({
  _attributes: object.$
    ? {
        identifierType: object.$.IdentifierType || undefined,
      }
    : undefined,
  value: object._ || object,
});
