import { MessagingParty } from "./messagingParty";

export type MessageAuditTrailEvent = {
  messagingPartyDescriptor: MessagingParty;
  dateTime: Date;
};
