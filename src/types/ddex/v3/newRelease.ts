type TNewRelease = {
  resourceList: {
    soundRecording: {
      soundRecordingDetailsByTerritory: {
        technicalSoundRecordingDetails: {
          file: {
            fileName: string;
            filePath?: string;
          }[];
        }[];
      }[];
    }[];
    image: {
      imageDetailsByTerritory: {
        technicalImageDetails: {
          file: {
            fileName: string;
            filePath?: string;
          }[];
        }[];
      }[];
    }[];
  };
};

export { TNewRelease };
