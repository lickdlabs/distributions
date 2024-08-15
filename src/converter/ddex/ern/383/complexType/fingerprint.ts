import { Avs411, Ern383, Ern411 } from "../../../../../types";

export const convertFingerprint = (
  fingerprint: Ern383.Fingerprint,
): Ern411.Fingerprint => ({
  algorithm: fingerprint.fingerprintAlgorithmType,
  version: fingerprint.fingerprintAlgorithmVersion,
  parameter: fingerprint.fingerprintAlgorithmParameter,
  file: undefined,
  dataType: fingerprint.fingerprintDataType as unknown as Avs411.BinaryDataType,
  fingerprintValue: fingerprint.fingerprint,
});
