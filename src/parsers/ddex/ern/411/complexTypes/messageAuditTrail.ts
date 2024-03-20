import { Ern411 } from "../../../../../types";
import { parseMessageAuditTrailEvent } from "./messageAuditTrailEvent";

export const parseMessageAuditTrail = (
  object: any,
): Ern411.MessageAuditTrail => {
  return {
    messageAuditTrailEvent: object.MessageAuditTrailEvent.map(
      (messageAuditTrailEvent: any) =>
        parseMessageAuditTrailEvent(messageAuditTrailEvent),
    ),
  };
};
