import { ParserError } from "../../../../errors";
import { Ern411, ErnVersions } from "../../../../types";
import { parseNewReleaseMessage } from "./elements/newReleaseMessage";
import { parsePurgeReleaseMessage } from "./elements/purgeReleaseMessage";

export const parse411 = (action: string, object: any): Ern411.Ern => {
  switch (action) {
    case "NewReleaseMessage":
      return parseNewReleaseMessage(object);

    case "PurgeReleaseMessage":
      return parsePurgeReleaseMessage(object);
  }

  throw new ParserError({
    version: ErnVersions.ERN_411,
    action,
    message: "unknown/unsupported action",
  });
};
