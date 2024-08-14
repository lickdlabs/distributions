import { Ern383 } from "../../../../../types";

export const parseFingerprintAlgorithmType = (
  object: any,
): Ern383.FingerprintAlgorithmType => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object._ || object,
});
