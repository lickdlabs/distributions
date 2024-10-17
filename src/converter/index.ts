import { ConverterError } from "../errors";
import { Logger } from "../logger";
import { Ern, Erns, ErnVersions } from "../types";
import { convert382, convert383 } from "./ddex";

export const convert = <K extends keyof Ern>(ern: Erns, version: K): Ern[K] => {
  Logger.info(`converting ddex ern to ${version}`, {
    version: ern.version,
    action: ern.action,
  });

  while (ern.version !== version) {
    ern = step(ern);
  }

  Logger.info("successfully converted ddex ern", {
    version: ern.version,
    action: ern.action,
  });

  return ern as Ern[K];
};

const step = (ern: Erns): Erns => {
  switch (ern.version) {
    case ErnVersions.ERN_382:
      return convert382(ern);

    case ErnVersions.ERN_383:
      return convert383(ern);

    default:
      throw new ConverterError({
        version: ern.version,
        action: ern.action,
        message: "unknown/unsupported version conversion",
      });
  }
};
