import { Logger } from "../logger";
import { Erns, ErnVersions } from "../types";
import { normalise411 } from "./ddex";

export const normalise = (ern: Erns): void => {
  Logger.info(`normalising ddex ern`, {
    version: ern.version,
    action: ern.action,
  });

  switch (ern.version) {
    case ErnVersions.ERN_411:
      return normalise411(ern);
  }
};
