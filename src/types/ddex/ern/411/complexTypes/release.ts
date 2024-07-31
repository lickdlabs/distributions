import { AdditionalTitle } from "./additionalTitle";
import { AdministratingRecordCompanyWithReference } from "./administratingRecordCompanyWithReference";
import { AvRating } from "./avRating";
import { CLineWithDefault } from "./cLineWithDefault";
import { CourtesyLineWithDefault } from "./courtesyLineWithDefault";
import { Deity } from "./deity";
import { DisplayArtist } from "./displayArtist";
import { DisplayArtistNameWithDefault } from "./displayArtistNameWithDefault";
import { DisplayTitle } from "./displayTitle";
import { DisplayTitleText } from "./displayTitleText";
import { EventDateWithDefault } from "./eventDateWithDefault";
import { ExternalResourceLink } from "./externalResourceLink";
import { GenreWithTerritory } from "./genreWithTerritory";
import { KeywordsWithTerritory } from "./keywordsWithTerritory";
import { MarketingComment } from "./marketingComment";
import { ParentalWarningTypeWithTerritory } from "./parentalWarningTypeWithTerritory";
import { PLineWithDefault } from "./pLineWithDefault";
import { Raga } from "./raga";
import { RelatedRelease } from "./relatedRelease";
import { ReleaseId } from "./releaseId";
import { ReleaseLabelReference } from "./releaseLabelReference";
import { ReleaseTypeForReleaseNotification } from "./releaseTypeForReleaseNotification";
import { ResourceGroup } from "./resourceGroup";
import { SynopsisWithTerritory } from "./synopsisWithTerritory";
import { Tala } from "./tala";

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
export type Release = Partial<IsCompilationChoice> & {
  _attributes?: {
    languageAndScriptCode?: string;
  };

  releaseReference: `${string & { __brand: "R[\\d\\-_a-zA-Z]+" }}`;
  releaseType: ReleaseTypeForReleaseNotification[];
  releaseId: ReleaseId;
  displayTitleText: DisplayTitleText[];
  displayTitle: DisplayTitle[];
  additionalTitle?: AdditionalTitle[];
  displayArtistName: DisplayArtistNameWithDefault[];
  displayArtist: DisplayArtist[];
  releaseLabelReference: ReleaseLabelReference[];
  administratingRecordCompany?: AdministratingRecordCompanyWithReference[];
  pLine?: PLineWithDefault[];
  cLine?: CLineWithDefault[];
  courtesyLine?: CourtesyLineWithDefault[];
  duration?: number;
  genre: GenreWithTerritory[];
  releaseDate?: EventDateWithDefault[];
  originalReleaseDate?: EventDateWithDefault[];
  parentalWarningType: ParentalWarningTypeWithTerritory[];
  avRating?: AvRating[];
  relatedRelease?: RelatedRelease[];
  resourceGroup: ResourceGroup;
  externalResourceLink?: ExternalResourceLink[];
  keywords?: KeywordsWithTerritory[];
  synopsis?: SynopsisWithTerritory[];
  raga?: Raga[];
  tala?: Tala[];
  deity?: Deity[];
  hiResMusicDescription?: string;
  isSoundtrack?: boolean;
  isHiResMusic?: boolean;
  marketingComment?: MarketingComment[];
};

// <xs:choice>
//   <xs:element name="IsCompilation" type="xs:boolean" />
//   <xs:element name="IsMultiArtistCompilation" type="xs:boolean" />
// </xs:choice>
type IsCompilationChoice =
  | { isCompilation: boolean; IsMultiArtistCompilation?: never }
  | { isCompilation?: never; IsMultiArtistCompilation: boolean };
