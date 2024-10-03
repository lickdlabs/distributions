import { Ern383 } from "../../../../../types";

export const parseCurrentTerritoryCode = (
  object: any,
): Ern383.CurrentTerritoryCode => ({
  _attributes: object.$
    ? {
        identifierType: object.$.IdentifierType || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
