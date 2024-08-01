import { Ern382, Ern411 } from "../../../../../types";
import { convertMessageAuditTrailEvent } from "./messageAuditTrailEvent";

export const convertMessageAuditTrail = (
  ern: Ern382.MessageAuditTrail,
): Ern411.MessageAuditTrail => ({
  messageAuditTrailEvent: ern.messageAuditTrailEvent.map(
    (messageAuditTrailEvent) =>
      convertMessageAuditTrailEvent(messageAuditTrailEvent),
  ),
});
