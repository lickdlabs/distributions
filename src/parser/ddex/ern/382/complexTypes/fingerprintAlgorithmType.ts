import { Ern382 } from "../../../../../types";

export const parseFingerprintAlgorithmType = (
  object: any,
): Ern382.FingerprintAlgorithmType => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
