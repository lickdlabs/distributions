import { Ern383 } from "../../../../../types";
import { parseDuration } from "../../utils";

export const parseResourceMusicalWorkReference = (
  object: any,
): Ern383.ResourceMusicalWorkReference => ({
  sequenceNumber: object.SequenceNumber
    ? parseInt(object.SequenceNumber[0])
    : undefined,
  durationUsed: object.DurationUsed
    ? parseDuration(object.DurationUsed[0])
    : undefined,
  isFragment: object.IsFragment ? object.IsFragment[0] === "true" : undefined,
  resourceMusicalWorkReference: object.ResourceMusicalWorkReference[0],
});
