import { Avs20200108, Avs411, Ern411 } from "../../../../../types";

export const convertHashSumAlgorithmType = (
  algorithm: Avs20200108.HashSumAlgorithmType,
): Ern411.HashSumAlgorithmType => ({
  _attributes: undefined,
  value: algorithm as unknown as Avs411.HashSumAlgorithmType,
});
