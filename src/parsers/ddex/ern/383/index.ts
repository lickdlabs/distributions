import { ILogger } from "@lickd/logger";
import { Ern383 } from "../../../../types";
import {
  parseCatalogListMessage,
  parseNewReleaseMessage,
  parsePurgeReleaseMessage,
} from "./elements";

export class Ern383Parser {
  public constructor(private logger: ILogger) {}

  public parse(action: string, object: any): Ern383.Ern<Ern383.Actions> {
    switch (action) {
      case Ern383.Actions.CATALOG_LIST_MESSAGE:
        return this.parseCatalogListMessage(object);

      case Ern383.Actions.NEW_RELEASE_MESSAGE:
        return this.parseNewReleaseMessage(object);

      case Ern383.Actions.PURGE_RELEASE_MESSAGE:
        return this.parsePurgeReleaseMessage(object);
    }

    throw new Error("unknown/unsupported action");
  }

  private parseCatalogListMessage(
    object: any,
  ): Ern383.Ern<Ern383.Actions.CATALOG_LIST_MESSAGE> {
    return {
      version: 383,
      action: Ern383.Actions.CATALOG_LIST_MESSAGE,
      element: parseCatalogListMessage(object),
    };
  }

  private parseNewReleaseMessage(
    object: any,
  ): Ern383.Ern<Ern383.Actions.NEW_RELEASE_MESSAGE> {
    return {
      version: 383,
      action: Ern383.Actions.NEW_RELEASE_MESSAGE,
      element: parseNewReleaseMessage(object),
    };
  }

  private parsePurgeReleaseMessage(
    object: any,
  ): Ern383.Ern<Ern383.Actions.PURGE_RELEASE_MESSAGE> {
    return {
      version: 383,
      action: Ern383.Actions.PURGE_RELEASE_MESSAGE,
      element: parsePurgeReleaseMessage(object),
    };
  }
}
