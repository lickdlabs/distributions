type TNewRelease = {
  resourceList: {
    soundRecording: {
      technicalDetails: {
        file: {
          uri: string;
        }[];
      }[];
    }[];
    image: {
      technicalDetails: {
        file: {
          uri: string;
        }[];
      }[];
    }[];
  };
};

export { TNewRelease };
