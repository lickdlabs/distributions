import { TFile } from ".";

type TNewRelease = {
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

export { TNewRelease };
