import { Avs411, Ern383, Ern411 } from "../../../../../types";

export const convertDetailedHashSum = (
  ern: Ern383.HashSum,
): Ern411.DetailedHashSum => ({
  algorithm: {
    value: ern.hashSumAlgorithmType as unknown as Avs411.HashSumAlgorithmType,
  },
  dataType: ern.hashSumDataType as unknown as Avs411.BinaryDataType,
  hashSumValue: ern.hashSum,
});
