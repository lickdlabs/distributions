import { Name } from "./name";
import { PartyId } from "./partyId";
import { PartyName } from "./partyName";

// <xs:complexType name="MessagingParty">
//   <xs:sequence>
//     <xs:element name="PartyId" maxOccurs="unbounded" type="ern:PartyId" />
//     <xs:element name="PartyName" minOccurs="0" type="ern:PartyName" />
//     <xs:element name="TradingName" minOccurs="0" type="ern:Name" />
//   </xs:sequence>
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
// </xs:complexType>
export type MessagingParty = {
  _attributes?: {
    languageAndScriptCode?: string;
  };

  partyId: PartyId[];
  partyName?: PartyName;
  tradingName?: Name;
};
