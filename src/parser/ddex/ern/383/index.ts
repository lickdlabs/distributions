import { ParserError } from "../../../../errors";
import { Ern383, ErnVersions } from "../../../../types";
import {
  parseCatalogListMessage,
  parseNewReleaseMessage,
  parsePurgeReleaseMessage,
} from "./elements";

export const parse383 = (action: string, object: any): Ern383.Ern => {
  switch (action) {
    case "CatalogListMessage":
      return parseCatalogListMessage(object);

    case "NewReleaseMessage":
      return parseNewReleaseMessage(object);

    case "PurgeReleaseMessage":
      return parsePurgeReleaseMessage(object);
  }

  throw new ParserError({
    version: ErnVersions.ERN_383,
    action,
    message: "unknown/unsupported action",
  });
};
