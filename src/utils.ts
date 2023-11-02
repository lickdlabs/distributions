import { EType, TDistribution, ddex } from "./types";

export const isDdex = (
  distro: TDistribution<EType>,
): distro is TDistribution<EType.DDEX> => distro.type === EType.DDEX;

export const isDdexV3 = (
  details: ddex.TDistribution<ddex.EVersion>,
): details is ddex.TDistribution<ddex.EVersion.V3> =>
  details.version === ddex.EVersion.V3;

export const isDdexV3NewRelease = (
  distro: ddex.v3.TDistribution<ddex.v3.EAction>,
): distro is ddex.v3.TDistribution<ddex.v3.EAction.NEW_RELEASE> =>
  distro.action === ddex.v3.EAction.NEW_RELEASE;

export const isDdexV4 = (
  details: ddex.TDistribution<ddex.EVersion>,
): details is ddex.TDistribution<ddex.EVersion.V4> =>
  details.version === ddex.EVersion.V4;

export const isDdexV4NewRelease = (
  distro: ddex.v4.TDistribution<ddex.v4.EAction>,
): distro is ddex.v4.TDistribution<ddex.v4.EAction.NEW_RELEASE> =>
  distro.action === ddex.v4.EAction.NEW_RELEASE;
