import { Ern383 } from "../../../../../types";

export const parseAllTerritoryCode = (object: any): Ern383.AllTerritoryCode => {
  const attributes = {
    identifierType: object.$?.identifierType || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
