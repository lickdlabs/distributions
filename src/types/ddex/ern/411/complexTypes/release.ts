import { DisplayArtist } from "./displayArtist";
import { DisplayArtistNameWithDefault } from "./displayArtistNameWithDefault";
import { DisplayTitle } from "./displayTitle";
import { DisplayTitleText } from "./displayTitleText";
import { GenreWithTerritory } from "./genreWithTerritory";
import { ParentalWarningTypeWithTerritory } from "./parentalWarningTypeWithTerritory";
import { ReleaseId } from "./releaseId";
import { ReleaseLabelReference } from "./releaseLabelReference";
import { ReleaseTypeForReleaseNotification } from "./releaseTypeForReleaseNotification";
import { ResourceGroup } from "./resourceGroup";

// <xs:complexType name="Release">
//   <xs:sequence>
//     <xs:element name="ReleaseReference">
//       <xs:simpleType>
//         <xs:restriction base="xs:ID">
//           <xs:pattern value="R[\d\-_a-zA-Z]+" />
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:element>
//     <xs:element name="ReleaseType" maxOccurs="unbounded" type="ern:ReleaseTypeForReleaseNotification" />
//     <xs:element name="ReleaseId" type="ern:ReleaseId" />
//     <xs:element name="DisplayTitleText" maxOccurs="unbounded" type="ern:DisplayTitleText" />
//     <xs:element name="DisplayTitle" maxOccurs="unbounded" type="ern:DisplayTitle" />
//     <xs:element name="AdditionalTitle" minOccurs="0" maxOccurs="unbounded" type="ern:AdditionalTitle" />
//     <xs:element name="DisplayArtistName" maxOccurs="unbounded" type="ern:DisplayArtistNameWithDefault" />
//     <xs:element name="DisplayArtist" maxOccurs="unbounded" type="ern:DisplayArtist" />
//     <xs:element name="ReleaseLabelReference" maxOccurs="unbounded" type="ern:ReleaseLabelReference" />
//     <xs:element name="AdministratingRecordCompany" minOccurs="0" maxOccurs="unbounded" type="ern:AdministratingRecordCompanyWithReference" />
//     <xs:element name="PLine" minOccurs="0" maxOccurs="unbounded" type="ern:PLineWithDefault" />
//     <xs:element name="CLine" minOccurs="0" maxOccurs="unbounded" type="ern:CLineWithDefault" />
//     <xs:element name="CourtesyLine" minOccurs="0" maxOccurs="unbounded" type="ern:CourtesyLineWithDefault" />
//     <xs:element name="Duration" minOccurs="0" type="xs:duration" />
//     <xs:element name="Genre" maxOccurs="unbounded" type="ern:GenreWithTerritory" />
//     <xs:element name="ReleaseDate" minOccurs="0" maxOccurs="unbounded" type="ern:EventDateWithDefault" />
//     <xs:element name="OriginalReleaseDate" minOccurs="0" maxOccurs="unbounded" type="ern:EventDateWithDefault" />
//     <xs:element name="ParentalWarningType" maxOccurs="unbounded" type="ern:ParentalWarningTypeWithTerritory" />
//     <xs:element name="AvRating" minOccurs="0" maxOccurs="unbounded" type="ern:AvRating" />
//     <xs:element name="RelatedRelease" minOccurs="0" maxOccurs="unbounded" type="ern:RelatedRelease" />
//     <xs:choice minOccurs="0">
//       <xs:element name="IsCompilation" type="xs:boolean" />
//       <xs:element name="IsMultiArtistCompilation" type="xs:boolean" />
//     </xs:choice>
//     <xs:element name="ResourceGroup" type="ern:ResourceGroup" />
//     <xs:element name="ExternalResourceLink" minOccurs="0" maxOccurs="unbounded" type="ern:ExternalResourceLink" />
//     <xs:element name="Keywords" minOccurs="0" maxOccurs="unbounded" type="ern:KeywordsWithTerritory" />
//     <xs:element name="Synopsis" minOccurs="0" maxOccurs="unbounded" type="ern:SynopsisWithTerritory" />
//     <xs:element name="Raga" minOccurs="0" maxOccurs="unbounded" type="ern:Raga" />
//     <xs:element name="Tala" minOccurs="0" maxOccurs="unbounded" type="ern:Tala" />
//     <xs:element name="Deity" minOccurs="0" maxOccurs="unbounded" type="ern:Deity" />
//     <xs:element name="HiResMusicDescription" minOccurs="0" type="xs:string" />
//     <xs:element name="IsSoundtrack" minOccurs="0" type="xs:boolean" />
//     <xs:element name="IsHiResMusic" minOccurs="0" type="xs:boolean" />
//     <xs:element name="MarketingComment" minOccurs="0" maxOccurs="unbounded" type="ern:MarketingComment" />
//   </xs:sequence>
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
// </xs:complexType>
export type Release = {
  _attributes?: {
    languageAndScriptCode?: string;
  };

  releaseReference: `${string & { __brand: "R[\\d\\-_a-zA-Z]+" }}`;
  releaseType: ReleaseTypeForReleaseNotification[];
  releaseId: ReleaseId;
  displayTitleText: DisplayTitleText[];
  displayTitle: DisplayTitle[];
  // @todo <xs:element name="AdditionalTitle" minOccurs="0" maxOccurs="unbounded" type="ern:AdditionalTitle" />
  displayArtistName: DisplayArtistNameWithDefault[];
  displayArtist: DisplayArtist[];
  releaseLabelReference: ReleaseLabelReference[];
  // @todo <xs:element name="AdministratingRecordCompany" minOccurs="0" maxOccurs="unbounded" type="ern:AdministratingRecordCompanyWithReference" />
  // @todo <xs:element name="PLine" minOccurs="0" maxOccurs="unbounded" type="ern:PLineWithDefault" />
  // @todo <xs:element name="CLine" minOccurs="0" maxOccurs="unbounded" type="ern:CLineWithDefault" />
  // @todo <xs:element name="CourtesyLine" minOccurs="0" maxOccurs="unbounded" type="ern:CourtesyLineWithDefault" />
  // @todo <xs:element name="Duration" minOccurs="0" type="xs:duration" />
  genre: GenreWithTerritory[];
  // @todo <xs:element name="ReleaseDate" minOccurs="0" maxOccurs="unbounded" type="ern:EventDateWithDefault" />
  // @todo <xs:element name="OriginalReleaseDate" minOccurs="0" maxOccurs="unbounded" type="ern:EventDateWithDefault" />
  parentalWarningType: ParentalWarningTypeWithTerritory[];
  // @todo <xs:element name="AvRating" minOccurs="0" maxOccurs="unbounded" type="ern:AvRating" />
  // @todo <xs:element name="RelatedRelease" minOccurs="0" maxOccurs="unbounded" type="ern:RelatedRelease" />
  // @todo <xs:choice minOccurs="0">
  //   <xs:element name="IsCompilation" type="xs:boolean" />
  //   <xs:element name="IsMultiArtistCompilation" type="xs:boolean" />
  // </xs:choice>
  resourceGroup: ResourceGroup;
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
};
