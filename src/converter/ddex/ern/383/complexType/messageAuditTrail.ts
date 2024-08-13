import { Ern383, Ern411 } from "../../../../../types";
import { convertMessageAuditTrailEvent } from "./messageAuditTrailEvent";

export const convertMessageAuditTrail = (
  messageAuditTrail: Ern383.MessageAuditTrail,
): Ern411.MessageAuditTrail => ({
  messageAuditTrailEvent: messageAuditTrail.messageAuditTrailEvent.map(
    (messageAuditTrailEvent) =>
      convertMessageAuditTrailEvent(messageAuditTrailEvent),
  ),
});
