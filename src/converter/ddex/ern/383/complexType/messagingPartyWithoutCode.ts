import { Ern383, Ern411 } from "../../../../../types";
import { convertPartyNameWithoutCode } from "./partyNameWithoutCode";

export const convertMessagingPartyWithoutCode = (
  ern: Ern383.MessagingParty,
): Ern411.MessagingPartyWithoutCode => ({
  partyId: ern.partyId[0].value as Ern411.MessagingPartyWithoutCode["partyId"],
  partyName: ern.partyName
    ? convertPartyNameWithoutCode(ern.partyName)
    : undefined,
  tradingName: ern.tradingName?.value,
});
