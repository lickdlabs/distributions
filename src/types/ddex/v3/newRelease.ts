import { TFile } from ".";

type TNewRelease = {
  resourceList: {
    soundRecording: {
      soundRecordingDetailsByTerritory: {
        technicalSoundRecordingDetails: {
          file: TFile[];
        }[];
      }[];
    }[];
    image: {
      imageDetailsByTerritory: {
        technicalImageDetails: {
          file: TFile[];
        }[];
      }[];
    }[];
  };
};

export { TNewRelease };
