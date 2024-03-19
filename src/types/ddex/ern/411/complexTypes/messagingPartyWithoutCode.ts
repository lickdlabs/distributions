import { PartyNameWithoutCode } from "./partyNameWithoutCode";

export type MessagingPartyWithoutCode = {
  partyId: `${string & { __brand: "PADPIDA[a-zA-Z0-9]+" }}`;
  partyName?: PartyNameWithoutCode;
  tradingName?: string;
};
