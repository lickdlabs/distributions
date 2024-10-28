import { Ern382 } from "../../../types";

export const isCatalogListMessage = (
  distro: Ern382.Ern,
): distro is Ern382.ErnCatalogListMessage =>
  distro.action === Ern382.Actions.CATALOG_LIST_MESSAGE;

export const isNewReleaseMessage = (
  distro: Ern382.Ern,
): distro is Ern382.ErnNewReleaseMessage =>
  distro.action === Ern382.Actions.NEW_RELEASE_MESSAGE;

export const isPurgeReleaseMessage = (
  distro: Ern382.Ern,
): distro is Ern382.ErnPurgeReleaseMessage =>
  distro.action === Ern382.Actions.PURGE_RELEASE_MESSAGE;
