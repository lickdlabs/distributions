import { Avs411, Ern383, Ern411 } from "../../../../../types";
import { convertTechnicalSoundRecordingDetails } from "./technicalSoundRecordingDetails";

export const convertSoundRecording = (
  ern: Ern383.SoundRecording,
): Ern411.SoundRecording => ({
  _attributes:
    ern._attributes && ern._attributes.languageAndScriptCode
      ? {
          languageAndScriptCode: ern._attributes.languageAndScriptCode,
        }
      : undefined,
  resourceReference: ern.resourceReference,
  type: {
    value: Avs411.SoundRecordingType.UNKNOWN,
  },
  resourceId: ern.soundRecordingId,
  displayTitleText: [
    {
      value: ern.referenceTitle.titleText.value,
    },
  ],
  displayTitle: [
    {
      titleText: ern.referenceTitle.titleText.value,
    },
  ],
  displayArtistName: [],
  displayArtist: [],
  duration: ern.duration,
  parentalWarningType: [
    {
      value: Avs411.ParentalWarningType.UNKNOWN,
    },
  ],
  technicalDetails: ern.soundRecordingDetailsByTerritory[0]
    .technicalSoundRecordingDetails
    ? ern.soundRecordingDetailsByTerritory[0].technicalSoundRecordingDetails.map(
        (technicalSoundRecordingDetails) =>
          convertTechnicalSoundRecordingDetails(technicalSoundRecordingDetails),
      )
    : undefined,
});
