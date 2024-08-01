import { Ern411 } from "../../../../../types";
import { parseDetailedHashSum } from "./detailedHashSum";

export const parseFile = (object: any): Ern411.File => ({
  uri: object.URI[0],
  hashSum: object.HashSum ? parseDetailedHashSum(object.HashSum[0]) : undefined,
  fileSize: object.FileSize ? parseFloat(object.FileSize[0]) : undefined,
});
