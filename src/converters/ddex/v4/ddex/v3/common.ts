import * as V3 from "../../../../../types/ddex/v3/common";
import { TFile } from "../../../../../types/ddex/v4/common";

export const file = (object: V3.TFile): TFile => {
  const file: TFile = {
    uri: object.filePath + object.fileName,
  };

  if (object.hashSum) {
    file.hashSum = {
      algorithm: object.hashSum.hashSumAlgorithmType,
      hashSumValue: object.hashSum.hashSum,
    };
  }

  return file;
};
