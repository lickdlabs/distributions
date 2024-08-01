import { Ern411 } from "../../../../../types";

export const parseHashSumAlgorithmType = (
  object: any,
): Ern411.HashSumAlgorithmType => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object._ || object,
});