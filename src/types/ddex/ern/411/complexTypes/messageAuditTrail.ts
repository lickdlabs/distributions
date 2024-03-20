import { MessageAuditTrailEvent } from "./messageAuditTrailEvent";

// <xs:complexType name="MessageAuditTrail">
//   <xs:sequence>
//     <xs:element name="MessageAuditTrailEvent" maxOccurs="unbounded" type="ern:MessageAuditTrailEvent" />
//   </xs:sequence>
// </xs:complexType>
export type MessageAuditTrail = {
  messageAuditTrailEvent: MessageAuditTrailEvent[];
};
