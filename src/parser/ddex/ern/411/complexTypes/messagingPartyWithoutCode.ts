import { Ern411 } from "../../../../../types";
import { parsePartyNameWithoutCode } from "./partyNameWithoutCode";

export const parseMessagingPartyWithoutCode = (
  object: any,
): Ern411.MessagingPartyWithoutCode => {
  return {
    partyId: object.PartyId[0],
    partyName: object.PartyName
      ? parsePartyNameWithoutCode(object.PartyName[0])
      : undefined,
    tradingName: object.TradingName ? object.TradingName[0] : undefined,
  };
};
