import { Ern383, Ern411 } from "../../../../../types";
import { convertMessageAuditTrail } from "./messageAuditTrail";
import { convertMessagingPartyWithoutCode } from "./messagingPartyWithoutCode";

export const convertMessageHeader = (
  ern: Ern383.MessageHeader,
): Ern411.MessageHeader => ({
  messageThreadId: ern.messageThreadId,
  messageId: ern.messageId,
  messageFileName: ern.messageFileName,
  messageSender: convertMessagingPartyWithoutCode(ern.messageSender),
  sentOnBehalfOf: ern.sentOnBehalfOf
    ? convertMessagingPartyWithoutCode(ern.sentOnBehalfOf)
    : undefined,
  messageRecipient: ern.messageRecipient.map((messageRecipient) =>
    convertMessagingPartyWithoutCode(messageRecipient),
  ),
  messageCreatedDateTime: ern.messageCreatedDateTime,
  messageAuditTrail: ern.messageAuditTrail
    ? convertMessageAuditTrail(ern.messageAuditTrail)
    : undefined,
  messageControlType: ern.messageControlType,
});
