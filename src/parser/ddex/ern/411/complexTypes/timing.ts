import { Ern411 } from "../../../../../types";
import { parseDuration } from "../../utils";

export const parseTiming = (object: any): Ern411.Timing => ({
  startPoint: object.StartPoint
    ? parseDuration(object.StartPoint[0])
    : undefined,
  durationUsed: object.DurationUsed
    ? parseDuration(object.DurationUsed[0])
    : undefined,
});
