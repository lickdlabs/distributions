import { Ern383 } from "../../../../../types";
import { parseCurrentTerritoryCode } from "./currentTerritoryCode";

export const parseTerritoryCodeChoice = (
  object: any,
): Ern383.TerritoryCodeChoice => {
  if (object.TerritoryCode) {
    return {
      territoryCode: object.TerritoryCode.map((territoryCode: any) =>
        parseCurrentTerritoryCode(territoryCode),
      ),
    };
  }

  return {
    excludedTerritoryCode: object.ExcludedTerritoryCode.map(
      (excludedTerritoryCode: any) =>
        parseCurrentTerritoryCode(excludedTerritoryCode),
    ),
  };
};
