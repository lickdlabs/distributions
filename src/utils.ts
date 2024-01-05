import { EDistroType, TDistro } from "./types";
import { EDistroDdexVersion, TDistroDdex } from "./types/ddex";
import { EDistroDdexV3Action, TDistroDdexV3 } from "./types/ddex/v3";
import { EDistroDdexV4Action, TDistroDdexV4 } from "./types/ddex/v4";

export const isDdex = (
  distro: TDistro<EDistroType>,
): distro is TDistro<EDistroType.DDEX> => distro.type === EDistroType.DDEX;

export const isDdexV3 = (
  details: TDistroDdex<EDistroDdexVersion>,
): details is TDistroDdex<EDistroDdexVersion.V3> =>
  details.version === EDistroDdexVersion.V3;

export const isDdexV3NewRelease = (
  distro: TDistroDdexV3<EDistroDdexV3Action>,
): distro is TDistroDdexV3<EDistroDdexV3Action.NEW_RELEASE> =>
  distro.action === EDistroDdexV3Action.NEW_RELEASE;

export const isDdexV4 = (
  details: TDistroDdex<EDistroDdexVersion>,
): details is TDistroDdex<EDistroDdexVersion.V4> =>
  details.version === EDistroDdexVersion.V4;

export const isDdexV4NewRelease = (
  distro: TDistroDdexV4<EDistroDdexV4Action>,
): distro is TDistroDdexV4<EDistroDdexV4Action.NEW_RELEASE> =>
  distro.action === EDistroDdexV4Action.NEW_RELEASE;
