import { AdministratingRecordCompany } from "./administratingRecordCompany";
import { Artist } from "./artist";
import { AvRating } from "./avRating";
import { Character } from "./character";
import { CLine } from "./cLine";
import { Comment } from "./comment";
import { EventDate } from "./eventDate";
import { FileChoice } from "./fileChoice";
import { Genre } from "./genre";
import { Keywords } from "./keywords";
import { LabelName } from "./labelName";
import { Name } from "./name";
import { ParentalWarningType } from "./parentalWarningType";
import { PLine } from "./pLine";
import { RelatedRelease } from "./relatedRelease";
import { ReleaseType } from "./releaseType";
import { ResourceGroup } from "./resourceGroup";
import { RightsAgreementId } from "./rightsAgreementId";
import { Synopsis } from "./synopsis";
import { TerritoryCodeChoice } from "./territoryCodeChoice";
import { Title } from "./title";

// <xs:complexType name="ReleaseDetailsByTerritory">
//   <xs:sequence>
//     <xs:choice>
//       <xs:element name="TerritoryCode" maxOccurs="unbounded" type="ern:CurrentTerritoryCode" />
//       <xs:element name="ExcludedTerritoryCode" maxOccurs="unbounded" type="ern:CurrentTerritoryCode" />
//     </xs:choice>
//     <xs:element name="DisplayArtistName" minOccurs="0" maxOccurs="unbounded" type="ern:Name" />
//     <xs:element name="LabelName" minOccurs="0" maxOccurs="unbounded" type="ern:LabelName" />
//     <xs:element name="RightsAgreementId" minOccurs="0" type="ern:RightsAgreementId" />
//     <xs:element name="Title" minOccurs="0" maxOccurs="unbounded" type="ern:Title" />
//     <xs:element name="DisplayArtist" minOccurs="0" maxOccurs="unbounded" type="ern:Artist" />
//     <xs:element name="IsMultiArtistCompilation" minOccurs="0" type="xs:boolean" />
//     <xs:element name="AdministratingRecordCompany" minOccurs="0" maxOccurs="unbounded" type="ern:AdministratingRecordCompany" />
//     <xs:element name="ReleaseType" minOccurs="0" maxOccurs="unbounded" type="ern:ReleaseType" />
//     <xs:element name="RelatedRelease" minOccurs="0" maxOccurs="unbounded" type="ern:RelatedRelease" />
//     <xs:element name="ParentalWarningType" minOccurs="0" maxOccurs="unbounded" type="ern:ParentalWarningType" />
//     <xs:element name="AvRating" minOccurs="0" maxOccurs="unbounded" type="ern:AvRating" />
//     <xs:element name="MarketingComment" minOccurs="0" type="ern:Comment" />
//     <xs:element name="ResourceGroup" minOccurs="0" maxOccurs="unbounded" type="ern:ResourceGroup" />
//     <xs:element name="Genre" minOccurs="0" maxOccurs="unbounded" type="ern:Genre" />
//     <xs:element name="PLine" minOccurs="0" maxOccurs="unbounded" type="ern:PLine" />
//     <xs:element name="CLine" minOccurs="0" maxOccurs="unbounded" type="ern:CLine" />
//     <xs:element name="ReleaseDate" minOccurs="0" type="ern:EventDate" />
//     <xs:element name="OriginalReleaseDate" minOccurs="0" type="ern:EventDate" />
//     <xs:element name="OriginalDigitalReleaseDate" minOccurs="0" type="ern:EventDate" />
//     <xs:choice minOccurs="0">
//       <xs:element name="FileAvailabilityDescription" maxOccurs="unbounded" type="ern:Description" />
//       <xs:element name="File" maxOccurs="unbounded" type="ern:File" />
//     </xs:choice>
//     <xs:element name="Keywords" minOccurs="0" maxOccurs="unbounded" type="ern:Keywords" />
//     <xs:element name="Synopsis" minOccurs="0" type="ern:Synopsis" />
//     <xs:element name="Character" minOccurs="0" maxOccurs="unbounded" type="ern:Character" />
//     <xs:element name="NumberOfUnitsPerPhysicalRelease" minOccurs="0" type="xs:integer" />
//     <xs:element name="DisplayConductor" minOccurs="0" maxOccurs="unbounded" type="ern:Artist" />
//   </xs:sequence>
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
// </xs:complexType>
export type ReleaseDetailsByTerritory = TerritoryCodeChoice &
  Partial<FileChoice> & {
    _attributes?: {
      languageAndScriptCode?: string;
    };

    displayArtistName?: Name[];
    labelName?: LabelName[];
    rightsAgreementId?: RightsAgreementId;
    title?: Title[];
    displayArtist?: Artist[];
    isMultiArtistCompilation?: boolean;
    administratingRecordCompany?: AdministratingRecordCompany[];
    releaseType?: ReleaseType[];
    relatedRelease?: RelatedRelease[];
    parentalWarningType?: ParentalWarningType[];
    avRating?: AvRating[];
    marketingComment?: Comment;
    resourceGroup?: ResourceGroup[];
    genre?: Genre[];
    pLine?: PLine[];
    cLine?: CLine[];
    releaseDate?: EventDate;
    originalReleaseDate?: EventDate;
    originalDigitalReleaseDate?: EventDate;
    keywords?: Keywords[];
    synopsis?: Synopsis;
    character?: Character[];
    numberOfUnitsPerPhysicalRelease?: number;
    displayConductor?: Artist[];
  };
