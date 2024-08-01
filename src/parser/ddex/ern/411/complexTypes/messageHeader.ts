import { Ern411 } from "../../../../../types";
import { parseMessageAuditTrail } from "./messageAuditTrail";
import { parseMessagingPartyWithoutCode } from "./messagingPartyWithoutCode";

export const parseMessageHeader = (object: any): Ern411.MessageHeader => ({
  messageThreadId: object.MessageThreadId
    ? object.MessageThreadId[0]
    : undefined,
  messageId: object.MessageId[0],
  messageFileName: object.MessageFileName
    ? object.MessageFileName[0]
    : undefined,
  messageSender: parseMessagingPartyWithoutCode(object.MessageSender[0]),
  sentOnBehalfOf: object.SentOnBehalfOf
    ? parseMessagingPartyWithoutCode(object.SentOnBehalfOf[0])
    : undefined,
  messageRecipient: object.MessageRecipient.map((messageRecipient: any) =>
    parseMessagingPartyWithoutCode(messageRecipient),
  ),
  messageCreatedDateTime: new Date(object.MessageCreatedDateTime[0]),
  messageAuditTrail: object.MessageAuditTrail
    ? parseMessageAuditTrail(object.MessageAuditTrail[0])
    : undefined,
  messageControlType: object.MessageControlType
    ? object.MessageControlType[0]
    : undefined,
});
