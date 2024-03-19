import { MessagingPartyWithoutCode } from "./messagingPartyWithoutCode";

export type MessageAuditTrailEvent = {
  messagingPartyDescriptor: MessagingPartyWithoutCode;
  dateTime: Date;
};
