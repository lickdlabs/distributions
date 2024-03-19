import { MessagingParty } from "./messagingParty";

// <xs:complexType name="MessageAuditTrailEvent">
export type MessageAuditTrailEvent = {
  // <xs:element name="MessagingPartyDescriptor" type="ern:MessagingParty" />
  messagingPartyDescriptor: MessagingParty;

  // <xs:element name="DateTime" type="xs:dateTime" />
  dateTime: Date;
};
