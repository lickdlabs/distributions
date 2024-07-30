import { Ern383 } from "../../../../../types";

export const parseCurrentTerritoryCode = (
  object: any,
): Ern383.CurrentTerritoryCode => {
  const attributes = {
    identifierType: object.$?.IdentifierType || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
