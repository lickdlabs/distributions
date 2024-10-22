import { Ern382 } from "../../../../../types";
import { parseDuration } from "../../utils";

export const parseSoundRecordingCollectionReference = (
  object: any,
): Ern382.SoundRecordingCollectionReference => ({
  sequenceNumber: object.SequenceNumber
    ? parseInt(object.SequenceNumber[0])
    : undefined,
  soundRecordingCollectionReference:
    object.SoundRecordingCollectionReference[0],
  startTime: object.StartTime ? parseDuration(object.StartTime[0]) : undefined,
  duration: object.Duration ? parseDuration(object.Duration[0]) : undefined,
  endTime: object.EndTime ? parseDuration(object.EndTime[0]) : undefined,
  releaseResourceType: object.ReleaseResourceType
    ? object.ReleaseResourceType[0]
    : undefined,
});
