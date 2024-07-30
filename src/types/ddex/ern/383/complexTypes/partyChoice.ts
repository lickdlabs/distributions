import { PartyId } from "./partyId";
import { PartyName } from "./partyName";

// <xs:choice>
//   <xs:element name="PartyId" maxOccurs="unbounded" type="ern:PartyId" />
//   <xs:sequence>
//     <xs:element name="PartyName" maxOccurs="unbounded" type="ern:PartyName" />
//     <xs:element name="PartyId" minOccurs="0" maxOccurs="unbounded" type="ern:PartyId" />
//   </xs:sequence>
// </xs:choice>
export type PartyChoice =
  | { partyId: PartyId[]; partyName?: never }
  | { partyName: PartyName[]; partyId?: PartyId[] };
