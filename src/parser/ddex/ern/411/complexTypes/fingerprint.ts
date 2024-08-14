import { Ern411 } from "../../../../../types";
import { parseFile } from "./file";

export const parseFingerprint = (object: any): Ern411.Fingerprint => ({
  algorithm: object.Algorithm[0],
  version: object.Version ? object.Version[0] : undefined,
  parameter: object.Parameter ? object.Parameter[0] : undefined,
  ...parseFingerprintChoice(object),
});

const parseFingerprintChoice = (
  object: any,
): Partial<Ern411.FingerprintChoice> => {
  if (object.File) {
    return {
      file: parseFile(object.File[0]),
    };
  }

  if (object.DataType && object.FingerprintValue) {
    return {
      dataType: object.DataType[0],
      fingerprintValue: object.FingerprintValue[0],
    };
  }

  return {};
};
