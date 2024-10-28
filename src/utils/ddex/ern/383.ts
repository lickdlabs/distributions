import { Ern383 } from "../../../types";

export const isCatalogListMessage = (
  distro: Ern383.Ern,
): distro is Ern383.ErnCatalogListMessage =>
  distro.action === Ern383.Actions.CATALOG_LIST_MESSAGE;

export const isNewReleaseMessage = (
  distro: Ern383.Ern,
): distro is Ern383.ErnNewReleaseMessage =>
  distro.action === Ern383.Actions.NEW_RELEASE_MESSAGE;

export const isPurgeReleaseMessage = (
  distro: Ern383.Ern,
): distro is Ern383.ErnPurgeReleaseMessage =>
  distro.action === Ern383.Actions.PURGE_RELEASE_MESSAGE;
