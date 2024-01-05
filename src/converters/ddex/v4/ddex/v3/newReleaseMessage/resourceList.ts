import * as V3 from "../../../../../../types/ddex/v3/newReleaseMessage";
import * as V4 from "../../../../../../types/ddex/v4/newReleaseMessage";
import { file } from "../common";

export const resourceList = (object: V3.TResourceList): V4.TResourceList => {
  const resourceList: V4.TResourceList = {};

  if (object.soundRecording) {
    resourceList.soundRecording = object.soundRecording.map(soundRecording);
  }

  if (object.image) {
    resourceList.image = object.image.map(image);
  }

  return resourceList;
};

const soundRecording = (object: V3.TSoundRecording): V4.TSoundRecording => {
  const soundRecording: V4.TSoundRecording = {};

  if (object.soundRecordingDetailsByTerritory) {
    soundRecording.technicalDetails = [];

    object.soundRecordingDetailsByTerritory.forEach(
      (soundRecordingDetailsByTerritory) => {
        soundRecordingDetailsByTerritory.technicalSoundRecordingDetails?.forEach(
          (technicalSoundRecordingDetails) => {
            if (!technicalSoundRecordingDetails.file[0]) {
              throw new Error("no sound recording file found");
            }

            if (technicalSoundRecordingDetails.file.length > 1) {
              throw new Error("only one file supported per sound recording");
            }

            soundRecording.technicalDetails?.push({
              file: file(technicalSoundRecordingDetails.file[0]),
            });
          },
        );
      },
    );
  }

  return soundRecording;
};

const image = (object: V3.TImage): V4.TImage => {
  const image: V4.TImage = {};

  if (object.imageDetailsByTerritory) {
    image.technicalDetails = [];

    object.imageDetailsByTerritory.forEach((imageDetailsByTerritory) => {
      imageDetailsByTerritory.technicalImageDetails?.forEach(
        (technicalImageDetails) => {
          if (!technicalImageDetails.file[0]) {
            throw new Error("no image file found");
          }

          if (technicalImageDetails.file.length > 1) {
            throw new Error("only one file supported per image");
          }

          image.technicalDetails?.push({
            file: file(technicalImageDetails.file[0]),
          });
        },
      );
    });
  }

  return image;
};
