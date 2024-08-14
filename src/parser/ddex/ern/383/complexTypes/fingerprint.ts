import { Ern383 } from "../../../../../types";
import { parseFingerprintAlgorithmType } from "./fingerprintAlgorithmType";

export const parseFingerprint = (object: any): Ern383.Fingerprint => ({
  fingerprint: object.Fingerprint[0],
  fingerprintAlgorithmType: parseFingerprintAlgorithmType(
    object.FingerprintAlgorithmType[0],
  ),
  fingerprintAlgorithmVersion: object.FingerprintAlgorithmVersion
    ? object.FingerprintAlgorithmVersion[0]
    : undefined,
  fingerprintAlgorithmParameter: object.FingerprintAlgorithmParameter
    ? object.FingerprintAlgorithmParameter[0]
    : undefined,
  fingerprintDataType: object.FingerprintDataType
    ? object.FingerprintDataType[0]
    : undefined,
});
