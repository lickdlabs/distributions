import {
  TImage,
  TImageDetailsByTerritory,
  TResourceList,
  TSoundRecording,
  TSoundRecordingDetailsByTerritory,
  TTechnicalImageDetails,
  TTechnicalSoundRecordingDetails,
} from "../../../../types/ddex/v3/newReleaseMessage";
import { file } from "../common";

export const resourceList = (object: any): TResourceList => {
  const resourceList: TResourceList = {};

  if (object.SoundRecording) {
    resourceList.soundRecording = object.SoundRecording.map(soundRecording);
  }

  if (object.Image) {
    resourceList.image = object.Image.map(image);
  }

  return resourceList;
};

const soundRecording = (object: any): TSoundRecording => ({
  soundRecordingDetailsByTerritory: object.SoundRecordingDetailsByTerritory.map(
    soundRecordingDetailsByTerritory,
  ),
});

const soundRecordingDetailsByTerritory = (
  object: any,
): TSoundRecordingDetailsByTerritory => {
  const soundRecordingDetailsByTerritory: TSoundRecordingDetailsByTerritory =
    {};

  if (object.TechnicalSoundRecordingDetails) {
    soundRecordingDetailsByTerritory.technicalSoundRecordingDetails =
      object.TechnicalSoundRecordingDetails.map(technicalSoundRecordingDetails);
  }

  return soundRecordingDetailsByTerritory;
};

const technicalSoundRecordingDetails = (
  object: any,
): TTechnicalSoundRecordingDetails => ({
  file: object.File.map(file),
});

const image = (object: any): TImage => ({
  imageDetailsByTerritory: object.ImageDetailsByTerritory.map(
    imageDetailsByTerritory,
  ),
});

const imageDetailsByTerritory = (object: any): TImageDetailsByTerritory => {
  const imageDetailsByTerritory: TImageDetailsByTerritory = {};

  if (object.TechnicalImageDetails) {
    imageDetailsByTerritory.technicalImageDetails =
      object.TechnicalImageDetails.map(technicalImageDetails);
  }

  return imageDetailsByTerritory;
};

const technicalImageDetails = (object: any): TTechnicalImageDetails => ({
  file: object.File.map(file),
});
