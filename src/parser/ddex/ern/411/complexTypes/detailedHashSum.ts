import { Ern411 } from "../../../../../types";
import { parseHashSumAlgorithmType } from "./hashSumAlgorithmType";

export const parseDetailedHashSum = (object: any): Ern411.DetailedHashSum => ({
  algorithm: parseHashSumAlgorithmType(object.Algorithm[0]),
  version: object.Version ? object.Version[0] : undefined,
  parameter: object.Parameter ? object.Parameter[0] : undefined,
  dataType: object.DataType ? object.DataType[0] : undefined,
  hashSumValue: object.HashSumValue[0],
});
