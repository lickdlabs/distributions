import { Ern411 } from "../../../../../types";
import { parseMessagingPartyWithoutCode } from "./messagingPartyWithoutCode";

export const parseMessageAuditTrailEvent = (
  object: any,
): Ern411.MessageAuditTrailEvent => ({
  messagingPartyDescriptor: parseMessagingPartyWithoutCode(
    object.MessagingPartyDescriptor[0],
  ),
  dateTime: new Date(object.DateTime[0]),
});
