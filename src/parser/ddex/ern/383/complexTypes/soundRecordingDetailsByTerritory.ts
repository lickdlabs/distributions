import { Ern383 } from "../../../../../types";
import { parseCurrentTerritoryCode } from "./currentTerritoryCode";
import { parseTechnicalSoundRecordingDetails } from "./technicalSoundRecordingDetails";

export const parseSoundRecordingDetailsByTerritory = (
  object: any,
): Ern383.SoundRecordingDetailsByTerritory => {
  const attributes = {
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
  };

  const parsed: Omit<
    Ern383.SoundRecordingDetailsByTerritory,
    "territoryCode" | "excludedTerritoryCode"
  > = {
    _attributes: object.$ ? attributes : undefined,
    technicalSoundRecordingDetails: object.TechnicalSoundRecordingDetails
      ? object.TechnicalSoundRecordingDetails.map(
          (technicalSoundRecordingDetails: any) =>
            parseTechnicalSoundRecordingDetails(technicalSoundRecordingDetails),
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
