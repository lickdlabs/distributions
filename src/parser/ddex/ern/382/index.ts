import { ILogger } from "@lickd/logger";
import { Ern382 } from "../../../../types";
import { CatalogListMessageParser } from "./catalogListMessage";
import { NewReleaseMessageParser } from "./newReleaseMessage";
import { PurgeReleaseMessageParser } from "./purgeReleaseMessage";

export class Ern382Parser {
  public constructor(private logger: ILogger) {}

  public parse(action: string, object: any): Ern382.Ern {
    switch (action) {
      case Ern382.Actions.CATALOG_LIST_MESSAGE:
        return new CatalogListMessageParser(this.logger).parse(object);

      case Ern382.Actions.NEW_RELEASE_MESSAGE:
        return new NewReleaseMessageParser(this.logger).parse(object);

      case Ern382.Actions.PURGE_RELEASE_MESSAGE:
        return new PurgeReleaseMessageParser(this.logger).parse(object);
    }

    throw new Error("unknown/unsupported action");
  }
}
