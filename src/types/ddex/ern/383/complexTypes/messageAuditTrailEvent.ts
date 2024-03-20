import { MessagingParty } from "./messagingParty";

// <xs:complexType name="MessageAuditTrailEvent">
//   <xs:sequence>
//     <xs:element name="MessagingPartyDescriptor" type="ern:MessagingParty" />
//     <xs:element name="DateTime" type="xs:dateTime" />
//   </xs:sequence>
// </xs:complexType>
export type MessageAuditTrailEvent = {
  messagingPartyDescriptor: MessagingParty;
  dateTime: Date;
};
