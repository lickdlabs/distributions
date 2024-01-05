import {
  TImage,
  TResourceList,
  TSoundRecording,
  TTechnicalImageDetails,
  TTechnicalSoundRecordingDetails,
} from "../../../../types/ddex/v4/newReleaseMessage";
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

const soundRecording = (object: any): TSoundRecording => {
  const soundRecording: TSoundRecording = {};

  if (object.TechnicalDetails) {
    soundRecording.technicalDetails = object.TechnicalDetails.map(
      technicalSoundRecordingDetails,
    );
  }

  return soundRecording;
};

const technicalSoundRecordingDetails = (
  object: any,
): TTechnicalSoundRecordingDetails => {
  const technicalDetails: TTechnicalSoundRecordingDetails = {};

  if (object.File) {
    technicalDetails.file = file(object.File[0]);
  }

  return technicalDetails;
};

const image = (object: any): TImage => {
  const image: TImage = {};

  if (object.TechnicalDetails) {
    image.technicalDetails = object.TechnicalDetails.map(technicalImageDetails);
  }

  return image;
};

const technicalImageDetails = (object: any): TTechnicalImageDetails => {
  const technicalDetails: TTechnicalImageDetails = {};

  if (object.File) {
    technicalDetails.file = file(object.File[0]);
  }

  return technicalDetails;
};
