import {
  EDistroDdexV3Action,
  TDistroDdexV3,
} from "../../../../../types/ddex/v3";
import {
  EDistroDdexV4Action,
  TDistroDdexV4,
} from "../../../../../types/ddex/v4";
import { isDdexV3NewRelease } from "../../../../../utils";
import { newReleaseMessage } from "./newReleaseMessage";

export const convertFromDdexV3 = (
  distro: TDistroDdexV3<EDistroDdexV3Action>,
): TDistroDdexV4<EDistroDdexV4Action> => {
  if (isDdexV3NewRelease(distro)) {
    return {
      action: EDistroDdexV4Action.NEW_RELEASE,
      message: newReleaseMessage(distro.message),
    };
  }

  throw new Error("unsupported conversion action: " + distro.action);
};
