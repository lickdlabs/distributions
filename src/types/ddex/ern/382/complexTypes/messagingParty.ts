import { Name } from "./name";
import { PartyId } from "./partyId";
import { PartyName } from "./partyName";

// <xs:complexType name="MessagingParty">
export type MessagingParty = {
  _attributes: {
    // <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
    languageAndScriptCode?: string;
  };

  // <xs:element name="PartyId" maxOccurs="unbounded" type="ern:PartyId" />
  partyId: PartyId[];

  // <xs:element name="PartyName" minOccurs="0" type="ern:PartyName" />
  partyName?: PartyName;

  // <xs:element name="TradingName" minOccurs="0" type="ern:Name" />
  tradingName?: Name;
};
