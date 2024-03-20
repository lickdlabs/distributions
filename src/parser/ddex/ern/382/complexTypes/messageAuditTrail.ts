import { Ern382 } from "../../../../../types";
import { parseMessageAuditTrailEvent } from "./messageAuditTrailEvent";

export const parseMessageAuditTrail = (
  object: any,
): Ern382.MessageAuditTrail => {
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
