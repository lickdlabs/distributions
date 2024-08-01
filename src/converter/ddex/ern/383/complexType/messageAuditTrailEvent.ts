import { Ern383, Ern411 } from "../../../../../types";
import { convertMessagingPartyWithoutCode } from "./messagingPartyWithoutCode";

export const convertMessageAuditTrailEvent = (
  ern: Ern383.MessageAuditTrailEvent,
): Ern411.MessageAuditTrailEvent => ({
  messagingPartyDescriptor: convertMessagingPartyWithoutCode(
    ern.messagingPartyDescriptor,
  ),
  dateTime: ern.dateTime,
});
