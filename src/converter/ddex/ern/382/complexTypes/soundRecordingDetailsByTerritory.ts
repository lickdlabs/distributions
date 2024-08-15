import { Ern382, Ern383 } from "../../../../../types";
import { convertDetailedResourceContributor } from "./detailedResourceContributor";

export const convertSoundRecordingDetailsByTerritory = (
  soundRecordingDetailsByTerritory: Ern382.SoundRecordingDetailsByTerritory,
): Ern383.SoundRecordingDetailsByTerritory => ({
  ...soundRecordingDetailsByTerritory,
  resourceContributor:
    soundRecordingDetailsByTerritory.resourceContributor?.map(
      (resourceContributor) =>
        convertDetailedResourceContributor(resourceContributor),
    ),
});
