import { Ern383 } from "../../../../../types";

export const parseHashSum = (object: any): Ern383.HashSum => ({
  hashSum: object.HashSum[0],
  hashSumAlgorithmType: object.HashSumAlgorithmType[0],
  hashSumDataType: object.HashSumDataType
    ? object.HashSumDataType[0]
    : undefined,
});
