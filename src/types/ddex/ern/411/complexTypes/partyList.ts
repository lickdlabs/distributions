import { Party } from "./party";

// <xs:complexType name="PartyList">
//   <xs:sequence>
//     <xs:element name="Party" maxOccurs="unbounded" type="ern:Party" />
//   </xs:sequence>
// </xs:complexType>
export type PartyList = {
  party: Party[];
};
