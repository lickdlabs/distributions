import { TFile } from "./common";

export type TNewRelease = {
  resourceList: {
    soundRecording: {
      technicalDetails: {
        file: TFile[];
      }[];
    }[];
    image: {
      technicalDetails: {
        file: TFile[];
      }[];
    }[];
  };
};
