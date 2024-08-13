import { Ern383, Ern411 } from "../../../../../types";
import { convertMessageAuditTrail } from "./messageAuditTrail";
import { convertMessagingPartyWithoutCode } from "./messagingPartyWithoutCode";

export const convertMessageHeader = (
  messageHeader: Ern383.MessageHeader,
): Ern411.MessageHeader => ({
  messageThreadId: messageHeader.messageThreadId,
  messageId: messageHeader.messageId,
  messageFileName: messageHeader.messageFileName,
  messageSender: convertMessagingPartyWithoutCode(messageHeader.messageSender),
  sentOnBehalfOf: messageHeader.sentOnBehalfOf
    ? convertMessagingPartyWithoutCode(messageHeader.sentOnBehalfOf)
    : undefined,
  messageRecipient: messageHeader.messageRecipient.map((messageRecipient) =>
    convertMessagingPartyWithoutCode(messageRecipient),
  ),
  messageCreatedDateTime: messageHeader.messageCreatedDateTime,
  messageAuditTrail: messageHeader.messageAuditTrail
    ? convertMessageAuditTrail(messageHeader.messageAuditTrail)
    : undefined,
  messageControlType: messageHeader.messageControlType,
});
