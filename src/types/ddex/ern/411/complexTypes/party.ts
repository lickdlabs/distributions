import { DetailedPartyId } from "./detailedPartyId";
import { PartyNameWithTerritory } from "./partyNameWithTerritory";

// <xs:complexType name="Party">
//   <xs:sequence>
//     <xs:element name="PartyReference">
//       <xs:simpleType>
//         <xs:restriction base="xs:ID">
//           <xs:pattern value="P[\d\-_a-zA-Z]+" />
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:element>
//     <xs:choice>
//       <xs:element name="PartyId" maxOccurs="unbounded" type="ern:DetailedPartyId" />
//       <xs:sequence>
//         <xs:element name="PartyName" maxOccurs="unbounded" type="ern:PartyNameWithTerritory" />
//         <xs:element name="PartyId" minOccurs="0" maxOccurs="unbounded" type="ern:DetailedPartyId" />
//       </xs:sequence>
//     </xs:choice>
//     <xs:element name="Affiliation" minOccurs="0" maxOccurs="unbounded" type="ern:Affiliation" />
//     <xs:element name="RelatedParty" minOccurs="0" maxOccurs="unbounded" type="ern:RelatedParty" />
//     <xs:element name="ArtistProfilePage" minOccurs="0" maxOccurs="unbounded" type="xs:string" />
//   </xs:sequence>
// </xs:complexType>
export type Party = PartyChoice & {
  partyReference: `${string & { __brand: "P[\\d\\-_a-zA-Z]+" }}`;
  // @todo <xs:element name="Affiliation" minOccurs="0" maxOccurs="unbounded" type="ern:Affiliation" />
  // @todo <xs:element name="RelatedParty" minOccurs="0" maxOccurs="unbounded" type="ern:RelatedParty" />
  // @todo <xs:element name="ArtistProfilePage" minOccurs="0" maxOccurs="unbounded" type="xs:string" />
};

type PartyChoice =
  | { partyId: DetailedPartyId[]; partyName?: never }
  | { partyName: PartyNameWithTerritory[]; partyId?: DetailedPartyId[] };
