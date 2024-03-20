import { Ern383 } from "../../../../../types";
import { parseMessageAuditTrailEvent } from "./messageAuditTrailEvent";

export const parseMessageAuditTrail = (
  object: any,
): Ern383.MessageAuditTrail => {
  const attributes = {
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    messageAuditTrailEvent: object.MessageAuditTrailEvent.map(
      (messageAuditTrailEvent: any) =>
        parseMessageAuditTrailEvent(messageAuditTrailEvent),
    ),
  };
};
