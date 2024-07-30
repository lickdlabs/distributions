import { Ern383 } from "../../../../../types";
import { convertDurationToMilliseconds } from "../../../../../utils";
import { parseReferenceTitle } from "./referenceTitle";
import { parseSoundRecordingDetailsByTerritory } from "./soundRecordingDetailsByTerritory";
import { parseSoundRecordingId } from "./soundRecordingId";

export const parseSoundRecording = (object: any): Ern383.SoundRecording => ({
  soundRecordingId: object.SoundRecordingId.map((soundRecordingId: any) =>
    parseSoundRecordingId(soundRecordingId),
  ),
  resourceReference: object.ResourceReference[0],
  referenceTitle: parseReferenceTitle(object.ReferenceTitle[0]),
  duration: convertDurationToMilliseconds(object.Duration[0]),
  soundRecordingDetailsByTerritory: object.SoundRecordingDetailsByTerritory.map(
    (soundRecordingDetailsByTerritory: any) =>
      parseSoundRecordingDetailsByTerritory(soundRecordingDetailsByTerritory),
  ),
});
