import { Avs20161006 } from "../../../avs";
import { Comment } from "./comment";
import { MessageAuditTrail } from "./messageAuditTrail";
import { MessagingParty } from "./messagingParty";

// <xs:complexType name="MessageHeader">
//   <xs:sequence>
//     <xs:element name="MessageThreadId" minOccurs="0" type="xs:string" />
//     <xs:element name="MessageId" type="xs:string" />
//     <xs:element name="MessageFileName" minOccurs="0" type="xs:string" />
//     <xs:element name="MessageSender" type="ern:MessagingParty" />
//     <xs:element name="SentOnBehalfOf" minOccurs="0" type="ern:MessagingParty" />
//     <xs:element name="MessageRecipient" maxOccurs="unbounded" type="ern:MessagingParty" />
//     <xs:element name="MessageCreatedDateTime" type="xs:dateTime" />
//     <xs:element name="MessageAuditTrail" minOccurs="0" type="ern:MessageAuditTrail" />
//     <xs:element name="Comment" minOccurs="0" type="ern:Comment" />
//     <xs:element name="MessageControlType" minOccurs="0" type="avs:MessageControlType" />
//   </xs:sequence>
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
// </xs:complexType>
export type MessageHeader = {
  _attributes?: {
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
  messageControlType?: Avs20161006.MessageControlType;
};
