import { ILogger } from "@lickd/logger";
import { ParserError } from "../../../../errors";
import { Ern411 } from "../../../../types";
import { parseNewReleaseMessage } from "./elements/newReleaseMessage";
import { parsePurgeReleaseMessage } from "./elements/purgeReleaseMessage";

export class Ern411Parser {
  public constructor(private logger: ILogger) {}

  public parse(action: string, object: any): Ern411.Ern {
    switch (action) {
      case "NewReleaseMessage":
        return parseNewReleaseMessage(object);

      case "PurgeReleaseMessage":
        return parsePurgeReleaseMessage(object);
    }

    throw new ParserError({
      version: 411,
      action,
      message: "unknown/unsupported action",
    });
  }
}
