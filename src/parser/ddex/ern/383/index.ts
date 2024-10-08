import { ILogger } from "@lickd/logger";
import { ParserError } from "../../../../errors";
import { Ern383 } from "../../../../types";
import {
  parseCatalogListMessage,
  parseNewReleaseMessage,
  parsePurgeReleaseMessage,
} from "./elements";

export class Ern383Parser {
  public constructor(private logger: ILogger) {}

  public parse(action: string, object: any): Ern383.Ern {
    switch (action) {
      case "CatalogListMessage":
        return parseCatalogListMessage(object);

      case "NewReleaseMessage":
        return parseNewReleaseMessage(object);

      case "PurgeReleaseMessage":
        return parsePurgeReleaseMessage(object);
    }

    throw new ParserError({
      version: 383,
      action,
      message: "unknown/unsupported action",
    });
  }
}
