import { PartyReference } from "../references";
import { PartyRelationshipType } from "./partyRelationshipType";

// <xs:complexType name="RelatedParty">
//   <xs:sequence>
//     <xs:element name="PartyRelatedPartyReference">
//       <xs:simpleType>
//         <xs:restriction base="xs:IDREF">
//           <xs:pattern value="P[\d\-_a-zA-Z]+" />
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:element>
//     <xs:element name="PartyRelationshipType" type="ern:PartyRelationshipType" />
//   </xs:sequence>
// </xs:complexType>
export type RelatedParty = {
  partyRelatedPartyReference: PartyReference;
  partyRelationshipType: PartyRelationshipType;
};
