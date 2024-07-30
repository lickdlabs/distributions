import { Ern382, Ern383 } from "../../../../../types";

export const convertPurgeReleaseMessage = (
  ern: Ern382.ErnPurgeReleaseMessage,
): Ern383.ErnPurgeReleaseMessage => ({
  ...ern,
  version: 383,
  action: Ern383.Actions.PURGE_RELEASE_MESSAGE,
});
