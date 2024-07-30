import { Ern382 } from "../../../../../types";
import { parseMessagingParty } from "./messagingParty";

export const parseMessageAuditTrailEvent = (
  object: any,
): Ern382.MessageAuditTrailEvent => ({
  messagingPartyDescriptor: parseMessagingParty(
    object.MessagingPartyDescriptor[0],
  ),
  dateTime: new Date(object.DateTime[0]),
});
