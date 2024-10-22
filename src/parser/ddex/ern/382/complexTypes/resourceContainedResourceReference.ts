import { Ern382 } from "../../../../../types";
import { parseDuration } from "../../utils";
import { parsePurpose } from "./purpose";

export const parseResourceContainedResourceReference = (
  object: any,
): Ern382.ResourceContainedResourceReference => ({
  resourceContainedResourceReference:
    object.ResourceContainedResourceReference[0],
  durationUsed: object.DurationUsed
    ? parseDuration(object.DurationUsed[0])
    : undefined,
  startPoint: object.StartPoint
    ? parseDuration(object.StartPoint[0])
    : undefined,
  purpose: object.Purpose ? parsePurpose(object.Purpose[0]) : undefined,
});
