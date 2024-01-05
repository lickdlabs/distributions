import { EDistroDdexV3Action, TDistroDdexV3 } from "../../../types/ddex/v3";
import { newReleaseMessage } from "./newReleaseMessage";

export const v3 = (object: any): TDistroDdexV3<EDistroDdexV3Action> => {
  const key = Object.keys(object)[0];
  const action = detectAction(key);

  console.log("parsing", action);

  switch (action) {
    case EDistroDdexV3Action.NEW_RELEASE:
      return {
        action,
        message: newReleaseMessage(object[key]),
      };

    case EDistroDdexV3Action.CATALOG_LIST:
    case EDistroDdexV3Action.PURGE_RELEASE:
      return {
        action,
        message: {},
      };
  }
};

const detectAction = (key: string): EDistroDdexV3Action => {
  if (key === "ern:NewReleaseMessage") {
    return EDistroDdexV3Action.NEW_RELEASE;
  }

  if (key === "ern:CatalogListMessage") {
    return EDistroDdexV3Action.CATALOG_LIST;
  }

  if (key === "ern:PurgeReleaseMessage") {
    return EDistroDdexV3Action.PURGE_RELEASE;
  }

  throw new Error("unsupported/unknown action: " + key);
};
