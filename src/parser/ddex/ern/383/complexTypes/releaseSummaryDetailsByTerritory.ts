import { Ern383 } from "../../../../../types";
import { parseLabelName } from "./labelName";
import { parseName } from "./name";
import { parseRightsAgreementId } from "./rightsAgreementId";
import { parseTerritoryCodeChoice } from "./territoryCodeChoice";

export const parseReleaseSummaryDetailsByTerritory = (
  object: any,
): Ern383.ReleaseSummaryDetailsByTerritory => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  ...parseTerritoryCodeChoice(object),
  displayArtistName: object.DisplayArtistName
    ? object.DisplayArtistName.map((displayArtistName: any) =>
        parseName(displayArtistName),
      )
    : undefined,
  labelName: object.LabelName
    ? object.LabelName.map((labelName: any) => parseLabelName(labelName))
    : undefined,
  rightsAgreementId: object.RightsAgreementId
    ? parseRightsAgreementId(object.RightsAgreementId[0])
    : undefined,
});
