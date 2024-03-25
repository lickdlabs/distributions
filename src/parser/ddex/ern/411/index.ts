import { ILogger } from "@lickd/logger";
import { Ern411 } from "../../../../types";
import { NewReleaseMessageParser } from "./newReleaseMessage";
import { PurgeReleaseMessageParser } from "./purgeReleaseMessage";

export class Ern411Parser {
  public constructor(private logger: ILogger) {}

  public parse(action: string, object: any): Ern411.Ern {
    switch (action) {
      case "NewReleaseMessage":
        return new NewReleaseMessageParser(this.logger).parse(object);

      case "PurgeReleaseMessage":
        return new PurgeReleaseMessageParser(this.logger).parse(object);
    }

    throw new Error("unknown/unsupported action");
  }
}
