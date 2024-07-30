import { ILogger } from "@lickd/logger";
import { Ern382 } from "../../../../types";
import {
  parseCatalogListMessage,
  parseNewReleaseMessage,
  parsePurgeReleaseMessage,
} from "./elements";

export class Ern382Parser {
  public constructor(private logger: ILogger) {}

  public parse(action: string, object: any): Ern382.Ern {
    switch (action) {
      case "CatalogListMessage":
        return parseCatalogListMessage(object);

      case "NewReleaseMessage":
        return parseNewReleaseMessage(object);

      case "PurgeReleaseMessage":
        return parsePurgeReleaseMessage(object);
    }

    throw new Error("unknown/unsupported action");
  }
}
