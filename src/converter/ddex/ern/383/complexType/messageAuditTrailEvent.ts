import { Ern383, Ern411 } from "../../../../../types";
import { convertMessagingPartyWithoutCode } from "./messagingPartyWithoutCode";

export const convertMessageAuditTrailEvent = (
  messageAuditTrailEvent: Ern383.MessageAuditTrailEvent,
): Ern411.MessageAuditTrailEvent => ({
  messagingPartyDescriptor: convertMessagingPartyWithoutCode(
    messageAuditTrailEvent.messagingPartyDescriptor,
  ),
  dateTime: messageAuditTrailEvent.dateTime,
});
