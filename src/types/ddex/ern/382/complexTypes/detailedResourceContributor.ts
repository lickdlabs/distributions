import { Avs20161006 } from "../../../avs";
import { AllTerritoryCode } from "./allTerritoryCode";
import { ArtistDelegatedUsageRights } from "./artistDelegatedUsageRights";
import { ArtistRole } from "./artistRole";
import { ContactId } from "./contactId";
import { CurrentTerritoryCode } from "./currentTerritoryCode";
import { EventDate } from "./eventDate";
import { Genre } from "./genre";
import { GoverningAgreementType } from "./governingAgreementType";
import { Membership } from "./membership";
import { PartyChoice } from "./partyChoice";
import { Performance } from "./performance";
import { ResourceContributorRole } from "./resourceContributorRole";

// <xs:complexType name="DetailedResourceContributor">
//   <xs:sequence>
//     <xs:choice>
//       <xs:element name="PartyId" maxOccurs="unbounded" type="ern:PartyId" />
//       <xs:sequence>
//         <xs:element name="PartyName" maxOccurs="unbounded" type="ern:PartyName" />
//         <xs:element name="PartyId" minOccurs="0" maxOccurs="unbounded" type="ern:PartyId" />
//       </xs:sequence>
//     </xs:choice>
//     <xs:element name="ResourceContributorRole" minOccurs="0" maxOccurs="unbounded" type="ern:ResourceContributorRole" />
//     <xs:element name="IsFeaturedArtist" minOccurs="0" type="xs:boolean" />
//     <xs:element name="IsContractedArtist" minOccurs="0" type="xs:boolean" />
//     <xs:element name="InstrumentType" minOccurs="0" maxOccurs="unbounded" type="xs:string" />
//     <xs:element name="ArtistDelegatedUsageRights" minOccurs="0" type="ern:ArtistDelegatedUsageRights" />
//     <xs:element name="Sex" minOccurs="0" type="avs:Sex" />
//     <xs:element name="Nationality" minOccurs="0" maxOccurs="unbounded" type="ern:ddexC_CurrentTerritoryCode" />
//     <xs:element name="DateAndPlaceOfBirth" minOccurs="0" type="ern:EventDate" />
//     <xs:element name="DateAndPlaceOfDeath" minOccurs="0" type="ern:EventDate" />
//     <xs:element name="PrimaryRole" minOccurs="0" type="ern:ArtistRole" />
//     <xs:element name="Performance" minOccurs="0" maxOccurs="unbounded" type="ern:Performance" />
//     <xs:element name="PrimaryInstrumentType" minOccurs="0" type="xs:string" />
//     <xs:element name="GoverningAgreementType" minOccurs="0" type="ern:GoverningAgreementType" />
//     <xs:element name="ContactInformation" minOccurs="0" type="ern:ContactId" />
//     <xs:element name="TerritoryOfResidency" minOccurs="0" type="ern:AllTerritoryCode" />
//     <xs:element name="Citizenship" minOccurs="0" type="ern:CurrentTerritoryCode" />
//     <xs:element name="AdditionalRoles" minOccurs="0" maxOccurs="unbounded" type="ern:ArtistRole" />
//     <xs:element name="Genre" minOccurs="0" maxOccurs="unbounded" type="ern:Genre" />
//     <xs:element name="Membership" minOccurs="0" maxOccurs="unbounded" type="ern:Membership" />
//   </xs:sequence>
//   <xs:attribute name="SequenceNumber" type="xs:integer" />
// </xs:complexType>
export type DetailedResourceContributor = PartyChoice & {
  _attributes?: {
    sequenceNumber?: number;
  };

  resourceContributorRole?: ResourceContributorRole[];
  isFeaturedArtist?: boolean;
  isContractedArtist?: boolean;
  instrumentType?: string[];
  artistDelegatedUsageRights?: ArtistDelegatedUsageRights;
  sex?: Avs20161006.Sex;
  nationality?: Avs20161006.CurrentTerritoryCode[];
  dateAndPlaceOfBirth?: EventDate;
  dateAndPlaceOfDeath?: EventDate;
  primaryRole?: ArtistRole;
  performance?: Performance[];
  primaryInstrumentType?: string;
  governingAgreementType?: GoverningAgreementType;
  contactInformation?: ContactId;
  territoryOfResidency?: AllTerritoryCode;
  citizenship?: CurrentTerritoryCode;
  additionalRoles?: ArtistRole[];
  genre?: Genre[];
  membership?: Membership[];
};
