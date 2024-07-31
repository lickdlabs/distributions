import { Ern382 } from "../../../../../types";

export const parseAllTerritoryCode = (object: any): Ern382.AllTerritoryCode => {
  const attributes = {
    identifierType: object.$?.identifierType || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
