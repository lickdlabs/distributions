import { Ern382 } from "../../../../../types";
import { parseComment } from "./comment";
import { parseMessageAuditTrail } from "./messageAuditTrail";
import { parseMessagingParty } from "./messagingParty";

export const parseMessageHeader = (object: any): Ern382.MessageHeader => {
  const attributes = {
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    messageThreadId: object.MessageThreadId
      ? object.MessageThreadId[0]
      : undefined,
    messageId: object.MessageId[0],
    messageFileName: object.MessageFileName
      ? object.MessageFileName[0]
      : undefined,
    messageSender: parseMessagingParty(object.MessageSender[0]),
    sentOnBehalfOf: object.SentOnBehalfOf
      ? parseMessagingParty(object.SentOnBehalfOf[0])
      : undefined,
    messageRecipient: object.MessageRecipient.map((messageRecipient: any) =>
      parseMessagingParty(messageRecipient),
    ),
    messageCreatedDateTime: new Date(object.MessageCreatedDateTime[0]),
    messageAuditTrail: object.MessageAuditTrail
      ? parseMessageAuditTrail(object.MessageAuditTrail[0])
      : undefined,
    comment: object.Comment ? parseComment(object.Comment[0]) : undefined,
    messageControlType: object.MessageControlType
      ? object.MessageControlType[0]
      : undefined,
  };
};
