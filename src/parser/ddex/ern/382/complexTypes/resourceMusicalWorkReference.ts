import { Ern382 } from "../../../../../types";
import { convertDurationToMilliseconds } from "../../../../../utils";

export const parseResourceMusicalWorkReference = (
  object: any,
): Ern382.ResourceMusicalWorkReference => ({
  sequenceNumber: object.SequenceNumber
    ? parseInt(object.SequenceNumber[0])
    : undefined,
  durationUsed: object.DurationUsed
    ? convertDurationToMilliseconds(object.DurationUsed[0])
    : undefined,
  isFragment: object.IsFragment ? object.IsFragment[0] === "true" : undefined,
  resourceMusicalWorkReference: object.ResourceMusicalWorkReference[0],
});
