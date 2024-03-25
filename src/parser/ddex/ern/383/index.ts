import { ILogger } from "@lickd/logger";
import { Ern383 } from "../../../../types";
import { CatalogListMessageParser } from "./catalogListMessage";
import { NewReleaseMessageParser } from "./newReleaseMessage";
import { PurgeReleaseMessageParser } from "./purgeReleaseMessage";

export class Ern383Parser {
  public constructor(private logger: ILogger) {}

  public parse(action: string, object: any): Ern383.Ern {
    switch (action) {
      case Ern383.Actions.CATALOG_LIST_MESSAGE:
        return new CatalogListMessageParser(this.logger).parse(object);

      case Ern383.Actions.NEW_RELEASE_MESSAGE:
        return new NewReleaseMessageParser(this.logger).parse(object);

      case Ern383.Actions.PURGE_RELEASE_MESSAGE:
        return new PurgeReleaseMessageParser(this.logger).parse(object);
    }

    throw new Error("unknown/unsupported action");
  }
}
