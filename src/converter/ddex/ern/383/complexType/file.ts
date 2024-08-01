import path from "path";
import { convertDetailedHashSum } from "./detailedHashSum";
import { Ern383, Ern411 } from "../../../../../types";

export const convertFile = (ern: Ern383.File): Ern411.File => {
  if (ern.url) {
    return {
      uri: ern.url,
      hashSum: ern.hashSum ? convertDetailedHashSum(ern.hashSum) : undefined,
    };
  }

  return {
    uri: path.join(ern.filePath || "", ern.fileName || ""),
    hashSum: ern.hashSum ? convertDetailedHashSum(ern.hashSum) : undefined,
  };
};
