import { Avs20200108 } from "../../../avs";
import { MusicalWorkContributorRole } from "./musicalWorkContributorRole";
import { PartyChoice } from "./partyChoice";

// <xs:complexType name="IndirectResourceContributor">
//   <xs:sequence>
//     <xs:choice>
//       <xs:element name="PartyId" maxOccurs="unbounded" type="ern:PartyId" />
//       <xs:sequence>
//         <xs:element name="PartyName" maxOccurs="unbounded" type="ern:PartyName" />
//         <xs:element name="PartyId" minOccurs="0" maxOccurs="unbounded" type="ern:PartyId" />
//       </xs:sequence>
//     </xs:choice>
//     <xs:element name="IndirectResourceContributorRole" minOccurs="0" maxOccurs="unbounded" type="ern:MusicalWorkContributorRole" />
//     <xs:element name="Nationality" minOccurs="0" maxOccurs="unbounded" type="ern:ddexC_CurrentTerritoryCode" />
//   </xs:sequence>
//   <xs:attribute name="SequenceNumber" type="xs:integer" />
// </xs:complexType>
export type IndirectResourceContributor = PartyChoice & {
  _attributes?: {
    sequenceNumber?: number;
  };

  indirectResourceContributorRole?: MusicalWorkContributorRole[];
  nationality?: Avs20200108.CurrentTerritoryCode[];
};
