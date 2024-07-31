import { Ern382 } from "../../../../../types";
import { parseReason } from "./reason";
import { parseReasonType } from "./reasonType";
import { parseReleaseId } from "./releaseId";

export const parseSalesReportingProxyReleaseId = (
  object: any,
): Ern382.SalesReportingProxyReleaseId => ({
  releaseId: parseReleaseId(object.ReleaseId[0]),
  reason: object.Reason
    ? object.Reason.map((reason: any) => parseReason(reason))
    : undefined,
  reasonType: parseReasonType(object.ReasonType[0]),
});
