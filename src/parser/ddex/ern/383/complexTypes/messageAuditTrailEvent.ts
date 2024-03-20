import { Ern383 } from "../../../../../types";
import { parseMessagingParty } from "./messagingParty";

export const parseMessageAuditTrailEvent = (
  object: any,
): Ern383.MessageAuditTrailEvent => {
  return {
    messagingPartyDescriptor: parseMessagingParty(
      object.MessagingPartyDescriptor[0],
    ),
    dateTime: new Date(object.DateTime[0]),
  };
};
