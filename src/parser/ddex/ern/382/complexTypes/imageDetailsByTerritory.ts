import { Ern382 } from "../../../../../types";
import { parseCurrentTerritoryCode } from "./currentTerritoryCode";
import { parseTechnicalImageDetails } from "./technicalImageDetails";

export const parseImageDetailsByTerritory = (
  object: any,
): Ern382.ImageDetailsByTerritory => {
  const attributes = {
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
  };

  const parsed: Omit<
    Ern382.ImageDetailsByTerritory,
    "territoryCode" | "excludedTerritoryCode"
  > = {
    _attributes: object.$ ? attributes : undefined,
    technicalImageDetails: object.TechnicalImageDetails
      ? object.TechnicalImageDetails.map((technicalImageDetails: any) =>
          parseTechnicalImageDetails(technicalImageDetails),
        )
      : undefined,
  };

  if (object.TerritoryCode) {
    return {
      ...parsed,
      territoryCode: object.TerritoryCode.map((territoryCode: any) =>
        parseCurrentTerritoryCode(territoryCode),
      ),
    };
  }

  return {
    ...parsed,
    excludedTerritoryCode: object.ExcludedTerritoryCode.map(
      (excludedTerritoryCode: any) =>
        parseCurrentTerritoryCode(excludedTerritoryCode),
    ),
  };
};