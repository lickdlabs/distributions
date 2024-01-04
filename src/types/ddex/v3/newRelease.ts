import { TFile } from "./common";

export type TNewRelease = {
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
