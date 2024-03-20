import { MessagingPartyWithoutCode } from "./messagingPartyWithoutCode";

// <xs:complexType name="MessageAuditTrailEvent">
//   <xs:sequence>
//     <xs:element name="MessagingPartyDescriptor" type="ern:MessagingPartyWithoutCode" />
//     <xs:element name="DateTime" type="xs:dateTime" />
//   </xs:sequence>
// </xs:complexType>
export type MessageAuditTrailEvent = {
  messagingPartyDescriptor: MessagingPartyWithoutCode;
  dateTime: Date;
};
