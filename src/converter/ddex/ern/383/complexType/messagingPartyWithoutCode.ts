import { ConverterError } from "../../../../../errors";
import { Ern383, Ern411 } from "../../../../../types";
import { convertPartyNameWithoutCode } from "./partyNameWithoutCode";

export const convertMessagingPartyWithoutCode = (
  messagingParty: Ern383.MessagingParty,
): Ern411.MessagingPartyWithoutCode => {
  const partyId = messagingParty.partyId.shift();
  if (!partyId) {
    throw new ConverterError("no party id found");
  }

  return {
    partyId: partyId.value as Ern411.MessagingPartyWithoutCode["partyId"],
    partyName: messagingParty.partyName
      ? convertPartyNameWithoutCode(messagingParty.partyName)
      : undefined,
    tradingName: messagingParty.tradingName?.value,
  };
};
