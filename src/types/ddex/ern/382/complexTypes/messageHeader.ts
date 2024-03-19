import { Avs20161006 } from "../../../avs";
import { Comment } from "./comment";
import { MessageAuditTrail } from "./messageAuditTrail";
import { MessagingParty } from "./messagingParty";

// <xs:complexType name="MessageHeader">
export type MessageHeader = {
  _attributes: {
    // <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
    languageAndScriptCode?: string;
  };

  // <xs:element name="MessageThreadId" minOccurs="0" type="xs:string" />
  messageThreadId?: string;

  // <xs:element name="MessageId" type="xs:string" />
  messageId: string;

  // <xs:element name="MessageFileName" minOccurs="0" type="xs:string" />
  messageFileName?: string;

  // <xs:element name="MessageSender" type="ern:MessagingParty" />
  messageSender: MessagingParty;

  // <xs:element name="SentOnBehalfOf" minOccurs="0" type="ern:MessagingParty" />
  sentOnBehalfOf?: MessagingParty;

  // <xs:element name="MessageRecipient" maxOccurs="unbounded" type="ern:MessagingParty" />
  messageRecipient: MessagingParty[];

  // <xs:element name="MessageCreatedDateTime" type="xs:dateTime" />
  messageCreatedDateTime: Date;

  // <xs:element name="MessageAuditTrail" minOccurs="0" type="ern:MessageAuditTrail" />
  messageAuditTrail?: MessageAuditTrail;

  // <xs:element name="Comment" minOccurs="0" type="ern:Comment" />
  comment?: Comment;

  // <xs:element name="MessageControlType" minOccurs="0" type="avs:MessageControlType" />
  messageControlType?: Avs20161006.MessageControlType;
};
