import { ParserError } from "../../../errors";
import { Logger } from "../../../logger";
import { Erns, ErnVersions } from "../../../types";
import { parse382 } from "./382";
import { parse383 } from "./383";
import { parse411 } from "./411";

export const parseErn = (object: any): Erns => {
  const key = Object.keys(object)[0];
  const ern = object[key].$["xmlns:ern"];
  const version = parseInt(ern.substring(ern.lastIndexOf("/") + 1));
  const action = key.replace(/ern:/, "");

  Logger.info("parsing object to ddex ern", { version, action });

  const parsed = parseObject(version, action, object[key]);

  Logger.info("successfully parsed object to ddex ern", {
    version: parsed.version,
    action: parsed.action,
  });

  return parsed;
};

const parseObject = (version: number, action: string, object: any): Erns => {
  switch (version) {
    case ErnVersions.ERN_382:
      return parse382(action, object);

    case ErnVersions.ERN_383:
      return parse383(action, object);

    case ErnVersions.ERN_411:
      return parse411(action, object);
  }

  throw new ParserError({
    version,
    action,
    message: "unknown/unsupported version",
  });
};
