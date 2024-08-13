import path from "path";
import { convertDetailedHashSum } from "./detailedHashSum";
import { Ern383, Ern411 } from "../../../../../types";

export const convertFile = (file: Ern383.File): Ern411.File => {
  if (file.url) {
    return {
      uri: file.url,
      hashSum: file.hashSum ? convertDetailedHashSum(file.hashSum) : undefined,
      fileSize: undefined,
    };
  }

  return {
    uri: path.join(file.filePath || "", file.fileName || ""),
    hashSum: file.hashSum ? convertDetailedHashSum(file.hashSum) : undefined,
    fileSize: undefined,
  };
};
