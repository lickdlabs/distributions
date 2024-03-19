import { Avs411 } from "../../../avs";
import { MessagingPartyWithoutCode } from "./messagingPartyWithoutCode";
import { MessageAuditTrail } from "./messageAuditTrail";

export type MessageHeader = {
  messageThreadId?: string;
  messageId: string;
  messageFileName?: string;
  messageSender: MessagingPartyWithoutCode;
  sentOnBehalfOf?: MessagingPartyWithoutCode;
  messageRecipient: MessagingPartyWithoutCode[];
  messageCreatedDateTime: Date;
  messageAuditTrail?: MessageAuditTrail;
  messageControlType?: Avs411.MessageControlType;
};
