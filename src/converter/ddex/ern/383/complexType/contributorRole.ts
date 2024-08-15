import { Avs411, Ern383, Ern411 } from "../../../../../types";

export const convertContributorRole = (
  contributorRole: Ern383.ResourceContributorRole,
): Ern411.ContributorRole => ({
  _attributes: contributorRole._attributes
    ? {
        namespace: contributorRole._attributes.namespace,
        userDefinedValue: contributorRole._attributes.userDefinedValue,
      }
    : undefined,
  value: contributorRole.value as unknown as Avs411.ContributorRole,
});
