import { ILogger } from "@lickd/logger";
import { Ern382 } from "../../../../types";
import {
  parseCatalogListMessage,
  parseNewReleaseMessage,
  parsePurgeReleaseMessage,
} from "./elements";

export class Ern382Parser {
  public constructor(private logger: ILogger) {}

  public parse(action: string, object: any): Ern382.Ern<Ern382.Actions> {
    switch (action) {
      case Ern382.Actions.CATALOG_LIST_MESSAGE:
        return this.parseCatalogListMessage(object);

      case Ern382.Actions.NEW_RELEASE_MESSAGE:
        return this.parseNewReleaseMessage(object);

      case Ern382.Actions.PURGE_RELEASE_MESSAGE:
        return this.parsePurgeReleaseMessage(object);
    }

    throw new Error("unknown/unsupported action");
  }

  private parseCatalogListMessage(
    object: any,
  ): Ern382.Ern<Ern382.Actions.CATALOG_LIST_MESSAGE> {
    return {
      version: 382,
      action: Ern382.Actions.CATALOG_LIST_MESSAGE,
      element: parseCatalogListMessage(object),
    };
  }

  private parseNewReleaseMessage(
    object: any,
  ): Ern382.Ern<Ern382.Actions.NEW_RELEASE_MESSAGE> {
    return {
      version: 382,
      action: Ern382.Actions.NEW_RELEASE_MESSAGE,
      element: parseNewReleaseMessage(object),
    };
  }

  private parsePurgeReleaseMessage(
    object: any,
  ): Ern382.Ern<Ern382.Actions.PURGE_RELEASE_MESSAGE> {
    return {
      version: 382,
      action: Ern382.Actions.PURGE_RELEASE_MESSAGE,
      element: parsePurgeReleaseMessage(object),
    };
  }
}
