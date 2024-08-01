import { Ern382 } from "../../../../../types";
import { parseMessageAuditTrailEvent } from "./messageAuditTrailEvent";

export const parseMessageAuditTrail = (
  object: any,
): Ern382.MessageAuditTrail => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  messageAuditTrailEvent: object.MessageAuditTrailEvent.map(
    (messageAuditTrailEvent: any) =>
      parseMessageAuditTrailEvent(messageAuditTrailEvent),
  ),
});
