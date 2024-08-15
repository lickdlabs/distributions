import { Ern383 } from "../../../../../types";
import { convertDurationToMilliseconds } from "../../../../../utils";
import { parsePurpose } from "./purpose";

export const parseResourceContainedResourceReference = (
  object: any,
): Ern383.ResourceContainedResourceReference => ({
  resourceContainedResourceReference:
    object.ResourceContainedResourceReference[0],
  durationUsed: object.DurationUsed
    ? convertDurationToMilliseconds(object.DurationUsed[0])
    : undefined,
  startPoint: object.StartPoint
    ? convertDurationToMilliseconds(object.StartPoint[0])
    : undefined,
  purpose: object.Purpose ? parsePurpose(object.Purpose[0]) : undefined,
});
