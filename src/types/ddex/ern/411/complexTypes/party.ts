import { PartyReference } from "../references";
import { Affiliation } from "./affiliation";
import { PartyChoice } from "./partyChoice";
import { RelatedParty } from "./relatedParty";

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
  partyReference: PartyReference;
  affiliation?: Affiliation[];
  relatedParty?: RelatedParty[];
  artistProfilePage?: string[];
};
