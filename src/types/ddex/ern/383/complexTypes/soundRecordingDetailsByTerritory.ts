import { CurrentTerritoryCode } from "./currentTerritoryCode";
import { TechnicalSoundRecordingDetails } from "./technicalSoundRecordingDetails";

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

  // @todo <xs:element name="Title" minOccurs="0" maxOccurs="unbounded" type="ern:Title" />
  // @todo <xs:element name="DisplayArtist" minOccurs="0" maxOccurs="unbounded" type="ern:Artist" />
  // @todo <xs:element name="DisplayConductor" minOccurs="0" maxOccurs="unbounded" type="ern:Artist" />
  // @todo <xs:element name="ResourceContributor" minOccurs="0" maxOccurs="unbounded" type="ern:DetailedResourceContributor" />
  // @todo <xs:element name="IndirectResourceContributor" minOccurs="0" maxOccurs="unbounded" type="ern:IndirectResourceContributor" />
  // @todo <xs:element name="RightsAgreementId" minOccurs="0" type="ern:RightsAgreementId" />
  // @todo <xs:element name="DisplayArtistName" minOccurs="0" maxOccurs="unbounded" type="ern:Name" />
  // @todo <xs:element name="LabelName" minOccurs="0" maxOccurs="unbounded" type="ern:LabelName" />
  // @todo <xs:element name="RightsController" minOccurs="0" maxOccurs="unbounded" type="ern:TypedRightsController" />
  // @todo <xs:element name="RemasteredDate" minOccurs="0" type="ern:EventDate" />
  // @todo <xs:element name="ResourceReleaseDate" minOccurs="0" type="ern:EventDate" />
  // @todo <xs:element name="OriginalResourceReleaseDate" minOccurs="0" type="ern:EventDate" />
  // @todo <xs:element name="PLine" minOccurs="0" maxOccurs="unbounded" type="ern:PLine" />
  // @todo <xs:element name="CourtesyLine" minOccurs="0" type="ern:CourtesyLine" />
  // @todo <xs:element name="SequenceNumber" minOccurs="0" type="xs:integer" />
  // @todo <xs:element name="HostSoundCarrier" minOccurs="0" maxOccurs="unbounded" type="ern:HostSoundCarrier" />
  // @todo <xs:element name="MarketingComment" minOccurs="0" type="ern:Comment" />
  // @todo <xs:element name="Genre" minOccurs="0" maxOccurs="unbounded" type="ern:Genre" />
  // @todo <xs:element name="ParentalWarningType" minOccurs="0" maxOccurs="unbounded" type="ern:ParentalWarningType" />
  // @todo <xs:element name="AvRating" minOccurs="0" maxOccurs="unbounded" type="ern:AvRating" />
  technicalSoundRecordingDetails?: TechnicalSoundRecordingDetails[];
  // @todo <xs:element name="FulfillmentDate" minOccurs="0" type="ern:FulfillmentDate" />
  // @todo <xs:element name="Keywords" minOccurs="0" maxOccurs="unbounded" type="ern:Keywords" />
  // @todo <xs:element name="Synopsis" minOccurs="0" type="ern:Synopsis" />
};

type TerritoryCodeChoice =
  | { territoryCode: CurrentTerritoryCode[]; excludedTerritoryCode?: never }
  | { territoryCode?: never; excludedTerritoryCode: CurrentTerritoryCode[] };
