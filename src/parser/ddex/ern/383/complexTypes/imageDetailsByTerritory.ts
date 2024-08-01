import { Ern383 } from "../../../../../types";
import { parseTechnicalImageDetails } from "./technicalImageDetails";
import { parseTerritoryCodeChoice } from "./territoryCodeChoice";

export const parseImageDetailsByTerritory = (
  object: any,
): Ern383.ImageDetailsByTerritory => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  ...parseTerritoryCodeChoice(object),
  technicalImageDetails: object.TechnicalImageDetails
    ? object.TechnicalImageDetails.map((technicalImageDetails: any) =>
        parseTechnicalImageDetails(technicalImageDetails),
      )
    : undefined,
});
