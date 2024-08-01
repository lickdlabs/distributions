import { Ern383 } from "../../../../../types";
import { parseAdministratingRecordCompany } from "./administratingRecordCompany";
import { parseArtist } from "./artist";
import { parseAvRating } from "./avRating";
import { parseCharacter } from "./character";
import { parseCLine } from "./cLine";
import { parseComment } from "./comment";
import { parseCurrentTerritoryCode } from "./currentTerritoryCode";
import { parseEventDate } from "./eventDate";
import { parsePartialFileChoice } from "./fileChoice";
import { parseGenre } from "./genre";
import { parseKeywords } from "./keywords";
import { parseLabelName } from "./labelName";
import { parseName } from "./name";
import { parseParentalWarningType } from "./parentalWarningType";
import { parsePLine } from "./pLine";
import { parseRelatedRelease } from "./relatedRelease";
import { parseReleaseType } from "./releaseType";
import { parseResourceGroup } from "./resourceGroup";
import { parseRightsAgreementId } from "./rightsAgreementId";
import { parseSynopsis } from "./synopsis";
import { parseTitle } from "./title";

export const parseReleaseDetailsByTerritory = (
  object: any,
): Ern383.ReleaseDetailsByTerritory => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  territoryCode: object.TerritoryCode
    ? object.TerritoryCode.map((territoryCode: any) =>
        parseCurrentTerritoryCode(territoryCode),
      )
    : undefined,
  excludedTerritoryCode: object.ExcludedTerritoryCode
    ? object.ExcludedTerritoryCode.map((excludedTerritoryCode: any) =>
        parseCurrentTerritoryCode(excludedTerritoryCode),
      )
    : undefined,
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
  title: object.Title
    ? object.Title.map((title: any) => parseTitle(title))
    : undefined,
  displayArtist: object.DisplayArtist
    ? object.DisplayArtist.map((displayArtist: any) =>
        parseArtist(displayArtist),
      )
    : undefined,
  isMultiArtistCompilation: object.IsMultiArtistCompilation
    ? object.IsMultiArtistCompilation[0] === "true"
    : undefined,
  administratingRecordCompany: object.AdministratingRecordCompany
    ? object.AdministratingRecordCompany.map(
        (administratingRecordCompany: any) =>
          parseAdministratingRecordCompany(administratingRecordCompany),
      )
    : undefined,
  releaseType: object.ReleaseType
    ? object.ReleaseType.map((releaseType: any) =>
        parseReleaseType(releaseType),
      )
    : undefined,
  relatedRelease: object.RelatedRelease
    ? object.RelatedRelease.map((relatedRelease: any) =>
        parseRelatedRelease(relatedRelease),
      )
    : undefined,
  parentalWarningType: object.ParentalWarningType
    ? object.ParentalWarningType.map((parentalWarningType: any) =>
        parseParentalWarningType(parentalWarningType),
      )
    : undefined,
  avRating: object.AvRating
    ? object.AvRating.map((avRating: any) => parseAvRating(avRating))
    : undefined,
  marketingComment: object.MarketingComment
    ? parseComment(object.MarketingComment[0])
    : undefined,
  resourceGroup: object.ResourceGroup
    ? object.ResourceGroup.map((resourceGroup: any) =>
        parseResourceGroup(resourceGroup),
      )
    : undefined,
  genre: object.Genre
    ? object.Genre.map((genre: any) => parseGenre(genre))
    : undefined,
  pLine: object.PLine
    ? object.PLine.map((pLine: any) => parsePLine(pLine))
    : undefined,
  cLine: object.CLine
    ? object.CLine.map((cLine: any) => parseCLine(cLine))
    : undefined,
  releaseDate: object.ReleaseDate
    ? parseEventDate(object.ReleaseDate[0])
    : undefined,
  originalReleaseDate: object.OriginalReleaseDate
    ? parseEventDate(object.OriginalReleaseDate[0])
    : undefined,
  originalDigitalReleaseDate: object.OriginalDigitalReleaseDate
    ? parseEventDate(object.OriginalDigitalReleaseDate[0])
    : undefined,
  ...parsePartialFileChoice(object),
  keywords: object.Keywords
    ? object.Keywords.map((keywords: any) => parseKeywords(keywords))
    : undefined,
  synopsis: object.Synopsis ? parseSynopsis(object.Synopsis[0]) : undefined,
  character: object.Character
    ? object.Character.map((character: any) => parseCharacter(character))
    : undefined,
  numberOfUnitsPerPhysicalRelease: object.NumberOfUnitsPerPhysicalRelease
    ? parseInt(object.NumberOfUnitsPerPhysicalRelease)
    : undefined,
  displayConductor: object.DisplayConductor
    ? object.DisplayConductor.map((displayConductor: any) =>
        parseArtist(displayConductor),
      )
    : undefined,
});
