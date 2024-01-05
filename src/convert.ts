import { convertFromDdexV3 } from "./converters/ddex/v4/ddex/v3";
import { EDistroType, TDistro } from "./types";
import { EDistroDdexVersion } from "./types/ddex";
import { EDistroDdexV4Action, TDistroDdexV4 } from "./types/ddex/v4";
import { isDdexV3, isDdexV4 } from "./utils";

export const convertToDdexV4 = (
  distro: TDistro<EDistroType>,
): TDistro<EDistroType.DDEX> & TDistroDdexV4<EDistroDdexV4Action> => {
  if (isDdexV4(distro)) {
    return distro;
  }

  if (isDdexV3(distro)) {
    return {
      type: EDistroType.DDEX,
      version: EDistroDdexVersion.V4,
      ...convertFromDdexV3(distro),
    };
  }

  throw new Error("unsupported conversion type: " + distro.type);
};
