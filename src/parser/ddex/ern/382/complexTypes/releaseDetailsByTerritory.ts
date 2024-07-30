import { Ern382 } from "../../../../../types";
import { parseAdministratingRecordCompany } from "./administratingRecordCompany";
import { parseArtist } from "./artist";
import { parseAvRating } from "./avRating";
import { parseComment } from "./comment";
import { parseCurrentTerritoryCode } from "./currentTerritoryCode";
import { parsePartialFileChoice } from "./fileChoice";
import { parseGenre } from "./genre";
import { parseLabelName } from "./labelName";
import { parseName } from "./name";
import { parseParentalWarningType } from "./parentalWarningType";
import { parseRelatedRelease } from "./relatedRelease";
import { parseReleaseType } from "./releaseType";
import { parseResourceGroup } from "./resourceGroup";
import { parseRightsAgreementId } from "./rightsAgreementId";
import { parseTitle } from "./title";

export const parseReleaseDetailsByTerritory = (
  object: any,
): Ern382.ReleaseDetailsByTerritory => {
  const attributes = {
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
    isMainRelease: object.$?.IsMainRelease
      ? object.$.IsMainRelease === "true"
      : undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
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
    // pLine?: PLine[];
    // cLine?: CLine[];
    // releaseDate?: EventDate;
    // originalReleaseDate?: EventDate;
    // originalDigitalReleaseDate?: EventDate;
    ...parsePartialFileChoice(object),
    // @todo <xs:element name="Keywords" minOccurs="0" maxOccurs="unbounded" type="ern:Keywords" />
    // @todo <xs:element name="Synopsis" minOccurs="0" type="ern:Synopsis" />
    // @todo <xs:element name="Character" minOccurs="0" maxOccurs="unbounded" type="ern:Character" />
    numberOfUnitsPerPhysicalRelease: object.NumberOfUnitsPerPhysicalRelease
      ? parseInt(object.NumberOfUnitsPerPhysicalRelease)
      : undefined,
    displayConductor: object.DisplayConductor
      ? object.DisplayConductor.map((displayConductor: any) =>
          parseArtist(displayConductor),
        )
      : undefined,
  };
};
