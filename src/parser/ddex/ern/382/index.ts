import { ParserError } from "../../../../errors";
import { Ern382, ErnVersions } from "../../../../types";
import {
  parseCatalogListMessage,
  parseNewReleaseMessage,
  parsePurgeReleaseMessage,
} from "./elements";

export const parse382 = (action: string, object: any): Ern382.Ern => {
  switch (action) {
    case "CatalogListMessage":
      return parseCatalogListMessage(object);

    case "NewReleaseMessage":
      return parseNewReleaseMessage(object);

    case "PurgeReleaseMessage":
      return parsePurgeReleaseMessage(object);
  }

  throw new ParserError({
    version: ErnVersions.ERN_382,
    action,
    message: "unknown/unsupported action",
  });
};
