import { EDistroDdexV4Action, TDistroDdexV4 } from "../../../types/ddex/v4";
import { newReleaseMessage } from "./newReleaseMessage";

export const v4 = (object: any): TDistroDdexV4<EDistroDdexV4Action> => {
  const key = Object.keys(object)[0];
  const action = detectAction(key);

  console.log("parsing", action);

  switch (action) {
    case EDistroDdexV4Action.NEW_RELEASE:
      return {
        action,
        message: newReleaseMessage(object[key]),
      };

    case EDistroDdexV4Action.PURGE_RELEASE:
      return {
        action,
        message: {},
      };
  }
};

const detectAction = (key: string): EDistroDdexV4Action => {
  if (key === "ern:NewReleaseMessage") {
    return EDistroDdexV4Action.NEW_RELEASE;
  }

  if (key === "ern:PurgeReleaseMessage") {
    return EDistroDdexV4Action.PURGE_RELEASE;
  }

  throw new Error("unsupported/unknown action: " + key);
};
