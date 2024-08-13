import { Avs411, Ern383, Ern411 } from "../../../../../types";

export const convertReleaseTypeForReleaseNotification = (
  releaseType: Ern383.ReleaseType,
): Ern411.ReleaseTypeForReleaseNotification => ({
  _attributes: releaseType._attributes
    ? {
        namespace: releaseType._attributes.namespace,
        userDefinedValue: releaseType._attributes.userDefinedValue,
      }
    : undefined,
  value: releaseType.value as unknown as Avs411.ReleaseTypeErn4,
});
