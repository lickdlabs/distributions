import { Ern411 } from "../../../../../types";
import { convertDurationToMilliseconds } from "../../../../../utils";

export const parseTiming = (object: any): Ern411.Timing => ({
  startPoint: object.StartPoint
    ? convertDurationToMilliseconds(object.StartPoint[0])
    : undefined,
  durationUsed: object.DurationUsed
    ? convertDurationToMilliseconds(object.DurationUsed[0])
    : undefined,
});
