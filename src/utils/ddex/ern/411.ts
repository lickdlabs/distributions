import { Ern411 } from "../../../types";

export const isNewReleaseMessage = (
  distro: Ern411.Ern,
): distro is Ern411.ErnNewReleaseMessage =>
  distro.action === Ern411.Actions.NEW_RELEASE_MESSAGE;

export const isPurgeReleaseMessage = (
  distro: Ern411.Ern,
): distro is Ern411.ErnPurgeReleaseMessage =>
  distro.action === Ern411.Actions.PURGE_RELEASE_MESSAGE;
