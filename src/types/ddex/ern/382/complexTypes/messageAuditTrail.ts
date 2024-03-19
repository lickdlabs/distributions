import { MessageAuditTrailEvent } from "./messageAuditTrailEvent";

// <xs:complexType name="MessageAuditTrail">
export type MessageAuditTrail = {
  _attributes: {
    // <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
    languageAndScriptCode?: string;
  };

  // <xs:element name="MessageAuditTrailEvent" maxOccurs="unbounded" type="ern:MessageAuditTrailEvent" />
  messageAuditTrailEvent: MessageAuditTrailEvent[];
};
