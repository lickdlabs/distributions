import { TFile } from "../../../types/ddex/v4/common";

export const file = (object: any): TFile => {
  const file: TFile = {
    uri: object.URI[0],
  };

  if (object.HashSum) {
    file.hashSum = {
      algorithm: object.HashSum[0].Algorithm[0],
      hashSumValue: object.HashSum[0].HashSumValue[0],
    };
  }

  if (object.FileSize) {
    file.fileSize = object.FileSize[0];
  }

  return file;
};
