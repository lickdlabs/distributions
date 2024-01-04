import { EDistroDdexV3Action, TDistroDdexV3 } from "../../../types/ddex/v3";
import { newRelease } from "./newRelease";

export const v3 = (object: any): TDistroDdexV3<EDistroDdexV3Action> => {
  const key = Object.keys(object)[0];
  const action = detectAction(key);

  console.log("parsing", action);

  switch (action) {
    case EDistroDdexV3Action.NEW_RELEASE:
      return {
        action,
        message: newRelease(object[key]),
      };

    default:
      throw new Error("unknown action");
  }
};

const detectAction = (key: string): EDistroDdexV3Action => {
  try {
    if (key === "ern:NewReleaseMessage") {
      return EDistroDdexV3Action.NEW_RELEASE;
    }

    throw new Error("unsupported action: " + key);
  } catch {
    throw new Error("could not detect action");
  }
};
