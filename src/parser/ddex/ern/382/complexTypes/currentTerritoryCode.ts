import { Ern382 } from "../../../../../types";

export const parseCurrentTerritoryCode = (
  object: any,
): Ern382.CurrentTerritoryCode => {
  const attributes = {
    identifierType: object.$?.IdentifierType || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
