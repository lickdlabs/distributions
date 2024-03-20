import { MessageAuditTrailEvent } from "./messageAuditTrailEvent";

// <xs:complexType name="MessageAuditTrail">
//   <xs:sequence>
//     <xs:element name="MessageAuditTrailEvent" maxOccurs="unbounded" type="ern:MessageAuditTrailEvent" />
//   </xs:sequence>
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
// </xs:complexType>
export type MessageAuditTrail = {
  _attributes: {
    languageAndScriptCode?: string;
  };

  messageAuditTrailEvent: MessageAuditTrailEvent[];
};
