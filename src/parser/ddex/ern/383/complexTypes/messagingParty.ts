import { Ern383 } from "../../../../../types";
import { parseName } from "./name";
import { parsePartyId } from "./partyId";
import { parsePartyName } from "./partyName";

export const parseMessagingParty = (object: any): Ern383.MessagingParty => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  partyId: object.PartyId.map((partyId: any) => parsePartyId(partyId)),
  partyName: object.PartyName ? parsePartyName(object.PartyName[0]) : undefined,
  tradingName: object.TradingName
    ? parseName(object.TradingName[0])
    : undefined,
});
