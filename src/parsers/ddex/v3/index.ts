import { EAction, TDistribution } from "../../../types/ddex/v3";
import { newRelease } from "./newRelease";

export const v3 = (object: any): TDistribution<EAction> => {
  const key = Object.keys(object)[0];
  const action = detectAction(key);

  console.log("parsing", action);

  switch (action) {
    case EAction.NEW_RELEASE:
      return {
        action,
        message: newRelease(object[key]),
      };

    default:
      throw new Error("unknown action");
  }
};

const detectAction = (key: string): EAction => {
  try {
    if (key === "ern:NewReleaseMessage") {
      return EAction.NEW_RELEASE;
    }

    throw new Error("unsupported action");
  } catch {
    throw new Error("could not detect action");
  }
};
