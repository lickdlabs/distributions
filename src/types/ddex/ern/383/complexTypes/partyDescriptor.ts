import { PartyChoice } from "./partyChoice";

// <xs:complexType name="PartyDescriptor">
//   <xs:choice>
//     <xs:element name="PartyId" maxOccurs="unbounded" type="ern:PartyId" />
//     <xs:sequence>
//       <xs:element name="PartyName" maxOccurs="unbounded" type="ern:PartyName" />
//       <xs:element name="PartyId" minOccurs="0" maxOccurs="unbounded" type="ern:PartyId" />
//     </xs:sequence>
//   </xs:choice>
// </xs:complexType>
export type PartyDescriptor = PartyChoice;
