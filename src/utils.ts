import { EDistroType, TDistro } from "./types";
import { TDistroDdex } from "./types/ddex";
import * as v3 from "./types/ddex/3";
import * as v4 from "./types/ddex/4";

export const isDdex = (
  distro: TDistro<EDistroType>,
): distro is TDistro<EDistroType.DDEX> => distro.type === EDistroType.DDEX;

export const isDdexV3 = (
  details: TDistroDdex,
): details is v3.TDistroDdex<v3.EDistroDdexVersion, v3.EDistroDdexAction> =>
  details.version.toString().startsWith("3");

export const isDdexV3NewRelease = (
  distro: v3.TDistroDdex<v3.EDistroDdexVersion, v3.EDistroDdexAction>,
): distro is v3.TDistroDdex<
  v3.EDistroDdexVersion,
  v3.EDistroDdexAction.NEW_RELEASE
> => distro.action === v3.EDistroDdexAction.NEW_RELEASE;

export const isDdexV4 = (
  details: TDistroDdex,
): details is v4.TDistroDdex<v4.EDistroDdexVersion, v4.EDistroDdexAction> =>
  details.version.toString().startsWith("4");

export const isDdexV4NewRelease = (
  distro: v4.TDistroDdex<v4.EDistroDdexVersion, v4.EDistroDdexAction>,
): distro is v4.TDistroDdex<
  v4.EDistroDdexVersion,
  v4.EDistroDdexAction.NEW_RELEASE
> => distro.action === v4.EDistroDdexAction.NEW_RELEASE;
