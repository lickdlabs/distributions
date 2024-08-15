import { Ern383 } from "../../../../../types";
import { convertDurationToMilliseconds } from "../../../../../utils";

export const parseSoundRecordingCollectionReference = (
  object: any,
): Ern383.SoundRecordingCollectionReference => ({
  sequenceNumber: object.SequenceNumber
    ? parseInt(object.SequenceNumber[0])
    : undefined,
  soundRecordingCollectionReference:
    object.SoundRecordingCollectionReference[0],
  startTime: object.StartTime
    ? convertDurationToMilliseconds(object.StartTime[0])
    : undefined,
  duration: object.Duration
    ? convertDurationToMilliseconds(object.Duration[0])
    : undefined,
  endTime: object.EndTime
    ? convertDurationToMilliseconds(object.EndTime[0])
    : undefined,
  releaseResourceType: object.ReleaseResourceType
    ? object.ReleaseResourceType[0]
    : undefined,
});
