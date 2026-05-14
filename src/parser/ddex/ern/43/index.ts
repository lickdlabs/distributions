import { ParserError } from "../../../../errors";
import { Ern43, ErnVersions } from "../../../../types";
import { parseNewReleaseMessage } from "../411/elements/newReleaseMessage";
import { parsePurgeReleaseMessage } from "../411/elements/purgeReleaseMessage";

// ERN 4.3 documents are parsed using the ERN 4.1.1 element parsers. xml2js
// surfaces the full raw object tree so any 4.3-only fields are simply ignored
// by the 4.1.1 parsers, which only read the fields they know about. The
// version tag on the returned envelope is rewritten to ERN_43 so downstream
// converters can route correctly.
export const parse43 = (action: string, object: any): Ern43.Ern => {
  switch (action) {
    case "NewReleaseMessage":
      return {
        ...parseNewReleaseMessage(object),
        version: ErnVersions.ERN_43,
        action: Ern43.Actions.NEW_RELEASE_MESSAGE,
      };

    case "PurgeReleaseMessage":
      return {
        ...parsePurgeReleaseMessage(object),
        version: ErnVersions.ERN_43,
        action: Ern43.Actions.PURGE_RELEASE_MESSAGE,
      };
  }

  throw new ParserError({
    version: ErnVersions.ERN_43,
    action,
    message: "unknown/unsupported action",
  });
};
