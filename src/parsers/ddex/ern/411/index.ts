import { ILogger } from "@lickd/logger";
import { Ern411 } from "../../../../types";
import { parseNewReleaseMessage, parsePurgeReleaseMessage } from "./elements";

export class Ern411Parser {
  public constructor(private logger: ILogger) {}

  public parse(action: string, object: any): Ern411.Ern<Ern411.Actions> {
    switch (action) {
      case Ern411.Actions.NEW_RELEASE_MESSAGE:
        return this.parseNewReleaseMessage(object);

      case Ern411.Actions.PURGE_RELEASE_MESSAGE:
        return this.parsePurgeReleaseMessage(object);
    }

    throw new Error("unknown/unsupported action");
  }

  private parseNewReleaseMessage(
    object: any,
  ): Ern411.Ern<Ern411.Actions.NEW_RELEASE_MESSAGE> {
    return {
      version: 411,
      action: Ern411.Actions.NEW_RELEASE_MESSAGE,
      element: parseNewReleaseMessage(object),
    };
  }

  private parsePurgeReleaseMessage(
    object: any,
  ): Ern411.Ern<Ern411.Actions.PURGE_RELEASE_MESSAGE> {
    return {
      version: 411,
      action: Ern411.Actions.PURGE_RELEASE_MESSAGE,
      element: parsePurgeReleaseMessage(object),
    };
  }
}
