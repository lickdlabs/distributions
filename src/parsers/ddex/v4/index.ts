import { EDistroDdexV4Action, TDistroDdexV4 } from "../../../types/ddex/v4";
import { newRelease } from "./newRelease";

export const v4 = (object: any): TDistroDdexV4<EDistroDdexV4Action> => {
  const key = Object.keys(object)[0];
  const action = detectAction(key);

  console.log("parsing", action);

  switch (action) {
    case EDistroDdexV4Action.NEW_RELEASE:
      return {
        action,
        message: newRelease(object[key]),
      };
  }
};

const detectAction = (key: string): EDistroDdexV4Action => {
  try {
    if (key === "ern:NewReleaseMessage") {
      return EDistroDdexV4Action.NEW_RELEASE;
    }

    throw new Error("unsupported action: " + key);
  } catch {
    throw new Error("could not detect action");
  }
};
