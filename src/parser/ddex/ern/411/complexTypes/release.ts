import { Ern411 } from "../../../../../types";
import { parseDisplayArtist } from "./displayArtist";
import { parseDisplayArtistNameWithDefault } from "./displayArtistNameWithDefault";
import { parseDisplayTitle } from "./displayTitle";
import { parseDisplayTitleText } from "./displayTitleText";
import { parseGenreWithTerritory } from "./genreWithTerritory";
import { parseParentalWarningTypeWithTerritory } from "./parentalWarningTypeWithTerritory";
import { parseReleaseId } from "./releaseId";
import { parseReleaseLabelReference } from "./releaseLabelReference";
import { parseReleaseTypeForReleaseNotification } from "./releaseTypeForReleaseNotification";
import { parseResourceGroup } from "./resourceGroup";

export const parseRelease = (object: any): Ern411.Release => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  releaseReference: object.ReleaseReference[0],
  releaseType: object.ReleaseType.map((releaseType: any) =>
    parseReleaseTypeForReleaseNotification(releaseType),
  ),
  releaseId: parseReleaseId(object.ReleaseId[0]),
  displayTitleText: object.DisplayTitleText.map((displayTitleText: any) =>
    parseDisplayTitleText(displayTitleText),
  ),
  displayTitle: object.DisplayTitle.map((displayTitle: any) =>
    parseDisplayTitle(displayTitle),
  ),
  // @todo <xs:element name="AdditionalTitle" minOccurs="0" maxOccurs="unbounded" type="ern:AdditionalTitle" />
  displayArtistName: object.DisplayArtistName.map((displayArtistName: any) =>
    parseDisplayArtistNameWithDefault(displayArtistName),
  ),
  displayArtist: object.DisplayArtist.map((displayArtist: any) =>
    parseDisplayArtist(displayArtist),
  ),
  releaseLabelReference: object.ReleaseLabelReference.map(
    (releaseLabelReference: any) =>
      parseReleaseLabelReference(releaseLabelReference),
  ),
  // @todo <xs:element name="AdministratingRecordCompany" minOccurs="0" maxOccurs="unbounded" type="ern:AdministratingRecordCompanyWithReference" />
  // @todo <xs:element name="PLine" minOccurs="0" maxOccurs="unbounded" type="ern:PLineWithDefault" />
  // @todo <xs:element name="CLine" minOccurs="0" maxOccurs="unbounded" type="ern:CLineWithDefault" />
  // @todo <xs:element name="CourtesyLine" minOccurs="0" maxOccurs="unbounded" type="ern:CourtesyLineWithDefault" />
  // @todo <xs:element name="Duration" minOccurs="0" type="xs:duration" />
  genre: object.Genre.map((genre: any) => parseGenreWithTerritory(genre)),
  // @todo <xs:element name="ReleaseDate" minOccurs="0" maxOccurs="unbounded" type="ern:EventDateWithDefault" />
  // @todo <xs:element name="OriginalReleaseDate" minOccurs="0" maxOccurs="unbounded" type="ern:EventDateWithDefault" />
  parentalWarningType: object.ParentalWarningType.map(
    (parentalWarningType: any) =>
      parseParentalWarningTypeWithTerritory(parentalWarningType),
  ),
  // @todo <xs:element name="AvRating" minOccurs="0" maxOccurs="unbounded" type="ern:AvRating" />
  // @todo <xs:element name="RelatedRelease" minOccurs="0" maxOccurs="unbounded" type="ern:RelatedRelease" />
  // @todo <xs:choice minOccurs="0">
  //   <xs:element name="IsCompilation" type="xs:boolean" />
  //   <xs:element name="IsMultiArtistCompilation" type="xs:boolean" />
  // </xs:choice>
  resourceGroup: parseResourceGroup(object.ResourceGroup[0]),
  // @todo <xs:element name="ExternalResourceLink" minOccurs="0" maxOccurs="unbounded" type="ern:ExternalResourceLink" />
  // @todo <xs:element name="Keywords" minOccurs="0" maxOccurs="unbounded" type="ern:KeywordsWithTerritory" />
  // @todo <xs:element name="Synopsis" minOccurs="0" maxOccurs="unbounded" type="ern:SynopsisWithTerritory" />
  // @todo <xs:element name="Raga" minOccurs="0" maxOccurs="unbounded" type="ern:Raga" />
  // @todo <xs:element name="Tala" minOccurs="0" maxOccurs="unbounded" type="ern:Tala" />
  // @todo <xs:element name="Deity" minOccurs="0" maxOccurs="unbounded" type="ern:Deity" />
  // @todo <xs:element name="HiResMusicDescription" minOccurs="0" type="xs:string" />
  // @todo <xs:element name="IsSoundtrack" minOccurs="0" type="xs:boolean" />
  // @todo <xs:element name="IsHiResMusic" minOccurs="0" type="xs:boolean" />
  // @todo <xs:element name="MarketingComment" minOccurs="0" maxOccurs="unbounded" type="ern:MarketingComment" />
});
