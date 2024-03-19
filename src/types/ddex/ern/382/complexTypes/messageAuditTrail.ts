import { MessageAuditTrailEvent } from "./messageAuditTrailEvent";

export type MessageAuditTrail = {
  _attributes: {
    languageAndScriptCode?: string;
  };

  messageAuditTrailEvent: MessageAuditTrailEvent[];
};
