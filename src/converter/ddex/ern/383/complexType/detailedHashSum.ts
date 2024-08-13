import { Avs411, Ern383, Ern411 } from "../../../../../types";
import { convertHashSumAlgorithmType } from "./hashSumAlgorithmType";

export const convertDetailedHashSum = (
  hashSum: Ern383.HashSum,
): Ern411.DetailedHashSum => ({
  algorithm: convertHashSumAlgorithmType(hashSum.hashSumAlgorithmType),
  version: undefined,
  parameter: undefined,
  dataType: hashSum.hashSumDataType
    ? (hashSum.hashSumDataType as unknown as Avs411.BinaryDataType)
    : undefined,
  hashSumValue: hashSum.hashSum,
});
