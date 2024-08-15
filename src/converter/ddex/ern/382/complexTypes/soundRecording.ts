import { Ern382, Ern383 } from "../../../../../types";
import { convertSoundRecordingDetailsByTerritory } from "./soundRecordingDetailsByTerritory";

export const convertSoundRecording = (
  soundRecording: Ern382.SoundRecording,
): Ern383.SoundRecording => ({
  ...soundRecording,
  soundRecordingDetailsByTerritory:
    soundRecording.soundRecordingDetailsByTerritory.map(
      (soundRecordingDetailsByTerritory) =>
        convertSoundRecordingDetailsByTerritory(
          soundRecordingDetailsByTerritory,
        ),
    ),
});
