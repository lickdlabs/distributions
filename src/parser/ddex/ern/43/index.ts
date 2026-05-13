import { ParserError } from "../../../../errors";
import { Ern43, ErnVersions } from "../../../../types";

// @todo Scaffold for ERN 4.3 — element parsers to be ported from the XSD at
// reference/ddex/ern/43/release-notification.xsd, mirroring the structure of
// the ERN 4.1.1 parser under ../411.
export const parse43 = (action: string, object: any): Ern43.Ern => {
  switch (action) {
    case "NewReleaseMessage":
    case "PurgeReleaseMessage":
      throw new ParserError({
        version: ErnVersions.ERN_43,
        action,
        message: "ERN 4.3 parser not yet implemented",
      });
  }

  throw new ParserError({
    version: ErnVersions.ERN_43,
    action,
    message: "unknown/unsupported action",
  });
};
