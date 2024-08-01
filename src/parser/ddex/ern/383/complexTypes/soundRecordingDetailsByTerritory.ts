import { Ern383 } from "../../../../../types";
import { parseTechnicalSoundRecordingDetails } from "./technicalSoundRecordingDetails";
import { parseTerritoryCodeChoice } from "./territoryCodeChoice";

export const parseSoundRecordingDetailsByTerritory = (
  object: any,
): Ern383.SoundRecordingDetailsByTerritory => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  ...parseTerritoryCodeChoice(object),
  technicalSoundRecordingDetails: object.TechnicalSoundRecordingDetails
    ? object.TechnicalSoundRecordingDetails.map(
        (technicalSoundRecordingDetails: any) =>
          parseTechnicalSoundRecordingDetails(technicalSoundRecordingDetails),
      )
    : undefined,
});
