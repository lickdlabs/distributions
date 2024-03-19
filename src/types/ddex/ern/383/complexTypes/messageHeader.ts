import { Avs20200108 } from "../../../avs";
import { Comment } from "./comment";
import { MessageAuditTrail } from "./messageAuditTrail";
import { MessagingParty } from "./messagingParty";

export type MessageHeader = {
  _attributes: {
    languageAndScriptCode?: string;
  };

  messageThreadId?: string;
  messageId: string;
  messageFileName?: string;
  messageSender: MessagingParty;
  sentOnBehalfOf?: MessagingParty;
  messageRecipient: MessagingParty[];
  messageCreatedDateTime: Date;
  messageAuditTrail?: MessageAuditTrail;
  comment?: Comment;
  messageControlType?: Avs20200108.MessageControlType;
};
