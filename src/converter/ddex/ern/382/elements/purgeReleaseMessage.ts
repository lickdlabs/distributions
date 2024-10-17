import { Ern382, Ern383, ErnVersions } from "../../../../../types";

export const convertPurgeReleaseMessage = (
  ern: Ern382.ErnPurgeReleaseMessage,
): Ern383.ErnPurgeReleaseMessage => ({
  ...ern,
  version: ErnVersions.ERN_383,
  action: Ern383.Actions.PURGE_RELEASE_MESSAGE,
});
