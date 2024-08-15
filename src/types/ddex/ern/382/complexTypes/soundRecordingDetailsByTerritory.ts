import { Artist } from "./artist";
import { AvRating } from "./avRating";
import { CourtesyLine } from "./courtesyLine";
import { DetailedResourceContributor } from "./detailedResourceContributor";
import { EventDate } from "./eventDate";
import { FulfillmentDate } from "./fulfillmentDate";
import { Genre } from "./genre";
import { HostSoundCarrier } from "./hostSoundCarrier";
import { IndirectResourceContributor } from "./indirectResourceContributor";
import { Keywords } from "./keywords";
import { LabelName } from "./labelName";
import { Name } from "./name";
import { ParentalWarningType } from "./parentalWarningType";
import { PLine } from "./pLine";
import { RightsAgreementId } from "./rightsAgreementId";
import { Synopsis } from "./synopsis";
import { TechnicalSoundRecordingDetails } from "./technicalSoundRecordingDetails";
import { TerritoryCodeChoice } from "./territoryCodeChoice";
import { Title } from "./title";
import { TypedRightsController } from "./typedRightsController";

// <xs:complexType name="SoundRecordingDetailsByTerritory">
//   <xs:sequence>
//     <xs:choice>
//       <xs:element name="TerritoryCode" maxOccurs="unbounded" type="ern:CurrentTerritoryCode" />
//       <xs:element name="ExcludedTerritoryCode" maxOccurs="unbounded" type="ern:CurrentTerritoryCode" />
//     </xs:choice>
//     <xs:element name="Title" minOccurs="0" maxOccurs="unbounded" type="ern:Title" />
//     <xs:element name="DisplayArtist" minOccurs="0" maxOccurs="unbounded" type="ern:Artist" />
//     <xs:element name="DisplayConductor" minOccurs="0" maxOccurs="unbounded" type="ern:Artist" />
//     <xs:element name="ResourceContributor" minOccurs="0" maxOccurs="unbounded" type="ern:DetailedResourceContributor" />
//     <xs:element name="IndirectResourceContributor" minOccurs="0" maxOccurs="unbounded" type="ern:IndirectResourceContributor" />
//     <xs:element name="RightsAgreementId" minOccurs="0" type="ern:RightsAgreementId" />
//     <xs:element name="DisplayArtistName" minOccurs="0" maxOccurs="unbounded" type="ern:Name" />
//     <xs:element name="LabelName" minOccurs="0" maxOccurs="unbounded" type="ern:LabelName" />
//     <xs:element name="RightsController" minOccurs="0" maxOccurs="unbounded" type="ern:TypedRightsController" />
//     <xs:element name="RemasteredDate" minOccurs="0" type="ern:EventDate" />
//     <xs:element name="ResourceReleaseDate" minOccurs="0" type="ern:EventDate" />
//     <xs:element name="OriginalResourceReleaseDate" minOccurs="0" type="ern:EventDate" />
//     <xs:element name="PLine" minOccurs="0" maxOccurs="unbounded" type="ern:PLine" />
//     <xs:element name="CourtesyLine" minOccurs="0" type="ern:CourtesyLine" />
//     <xs:element name="SequenceNumber" minOccurs="0" type="xs:integer" />
//     <xs:element name="HostSoundCarrier" minOccurs="0" maxOccurs="unbounded" type="ern:HostSoundCarrier" />
//     <xs:element name="MarketingComment" minOccurs="0" type="ern:Comment" />
//     <xs:element name="Genre" minOccurs="0" maxOccurs="unbounded" type="ern:Genre" />
//     <xs:element name="ParentalWarningType" minOccurs="0" maxOccurs="unbounded" type="ern:ParentalWarningType" />
//     <xs:element name="AvRating" minOccurs="0" maxOccurs="unbounded" type="ern:AvRating" />
//     <xs:element name="TechnicalSoundRecordingDetails" minOccurs="0" maxOccurs="unbounded" type="ern:TechnicalSoundRecordingDetails" />
//     <xs:element name="FulfillmentDate" minOccurs="0" type="ern:FulfillmentDate" />
//     <xs:element name="Keywords" minOccurs="0" maxOccurs="unbounded" type="ern:Keywords" />
//     <xs:element name="Synopsis" minOccurs="0" type="ern:Synopsis" />
//   </xs:sequence>
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
// </xs:complexType>
export type SoundRecordingDetailsByTerritory = TerritoryCodeChoice & {
  _attributes?: {
    languageAndScriptCode?: string;
  };

  title?: Title[];
  displayArtist?: Artist[];
  displayConductor?: Artist[];
  resourceContributor?: DetailedResourceContributor[];
  indirectResourceContributor?: IndirectResourceContributor[];
  rightsAgreementId?: RightsAgreementId;
  displayArtistName?: Name[];
  labelName?: LabelName[];
  rightsController?: TypedRightsController[];
  remasteredDate?: EventDate;
  resourceReleaseDate?: EventDate;
  originalResourceReleaseDate?: EventDate;
  pLine?: PLine[];
  courtesyLine?: CourtesyLine;
  sequenceNumber?: number;
  hostSoundCarrier?: HostSoundCarrier[];
  marketingComment?: Comment;
  genre?: Genre[];
  parentalWarningType?: ParentalWarningType[];
  avRating?: AvRating[];
  technicalSoundRecordingDetails?: TechnicalSoundRecordingDetails[];
  fulfillmentDate?: FulfillmentDate;
  keywords?: Keywords[];
  synopsis?: Synopsis;
};
