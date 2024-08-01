import { Ern411 } from "../../../../../types";

export const parseCurrentTerritoryCode = (
  object: any,
): Ern411.CurrentTerritoryCode => ({
  _attributes: object.$
    ? {
        identifierType: object.$.IdentifierType || undefined,
      }
    : undefined,
  value: object._ || object,
});
