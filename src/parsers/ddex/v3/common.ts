import { TFile } from "../../../types/ddex/v3/common";

export const file = (object: any): TFile => {
  const file: TFile = {
    fileName: object.FileName[0],
  };

  if (object.FilePath) {
    file.filePath = object.FilePath[0];
  }

  if (object.HashSum) {
    file.hashSum = {
      hashSum: object.HashSum[0].HashSum[0],
      hashSumAlgorithmType: object.HashSum[0].HashSumAlgorithmType[0],
    };
  }

  return file;
};
