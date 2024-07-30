import { Ern382 } from "../../../../../types";
import { parseHashSum } from "./hashSum";

export const parseFile = (object: any): Ern382.File => {
  if (object.FileName) {
    return {
      fileName: object.FileName[0],
      filePath: object.FilePath ? object.FilePath[0] : undefined,
      hashSum: object.HashSum ? parseHashSum(object.HashSum[0]) : undefined,
    };
  }

  return {
    url: object.URL[0],
    hashSum: object.HashSum ? parseHashSum(object.HashSum[0]) : undefined,
  };
};
