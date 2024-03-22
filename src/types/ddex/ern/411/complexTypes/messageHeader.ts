import { Avs411 } from "../../../avs";
import { MessagingPartyWithoutCode } from "./messagingPartyWithoutCode";
import { MessageAuditTrail } from "./messageAuditTrail";

// <xs:complexType name="MessageHeader">
//   <xs:sequence>
//     <xs:element name="MessageThreadId" minOccurs="0" type="xs:string" />
//     <xs:element name="MessageId" type="xs:string" />
//     <xs:element name="MessageFileName" minOccurs="0" type="xs:string" />
//     <xs:element name="MessageSender" type="ern:MessagingPartyWithoutCode" />
//     <xs:element name="SentOnBehalfOf" minOccurs="0" type="ern:MessagingPartyWithoutCode" />
//     <xs:element name="MessageRecipient" maxOccurs="unbounded" type="ern:MessagingPartyWithoutCode" />
//     <xs:element name="MessageCreatedDateTime" type="xs:dateTime" />
//     <xs:element name="MessageAuditTrail" minOccurs="0" type="ern:MessageAuditTrail" />
//     <xs:element name="MessageControlType" minOccurs="0" type="avs:MessageControlType" />
//   </xs:sequence>
// </xs:complexType>
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
