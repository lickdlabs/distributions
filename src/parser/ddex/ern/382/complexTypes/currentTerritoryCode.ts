import { Ern382 } from "../../../../../types";

export const parseCurrentTerritoryCode = (
  object: any,
): Ern382.CurrentTerritoryCode => ({
  _attributes: object.$
    ? {
        identifierType: object.$.IdentifierType || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
