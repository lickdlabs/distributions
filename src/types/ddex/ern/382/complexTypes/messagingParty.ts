import { Name } from "./name";
import { PartyId } from "./partyId";
import { PartyName } from "./partyName";

export type MessagingParty = {
  _attributes: {
    languageAndScriptCode?: string;
  };

  partyId: PartyId[];
  partyName?: PartyName;
  tradingName?: Name;
};
