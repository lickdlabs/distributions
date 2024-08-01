import { DetailedPartyId } from "./detailedPartyId";
import { PartyNameWithTerritory } from "./partyNameWithTerritory";

// <xs:choice>
//   <xs:element name="PartyId" maxOccurs="unbounded" type="ern:DetailedPartyId" />
//   <xs:sequence>
//     <xs:element name="PartyName" maxOccurs="unbounded" type="ern:PartyNameWithTerritory" />
//     <xs:element name="PartyId" minOccurs="0" maxOccurs="unbounded" type="ern:DetailedPartyId" />
//   </xs:sequence>
// </xs:choice>
export type PartyChoice =
  | { partyId: DetailedPartyId[]; partyName?: never }
  | { partyName: PartyNameWithTerritory[]; partyId?: DetailedPartyId[] };
