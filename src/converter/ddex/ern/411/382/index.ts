import { ILogger } from "@lickd/logger";
import { Ern382, Ern411 } from "../../../../../types";
import { NewReleaseMessageConverter } from "./newReleaseMessage";
import { PurgeReleaseMessageConverter } from "./purgeReleaseMessage";

export class Ern382Converter {
  public constructor(private logger: ILogger) {}

  public convert(ern: Ern382.Ern<Ern382.Actions>): Ern411.Ern<Ern411.Actions> {
    if (this.isNewReleaseMessage(ern)) {
      return new NewReleaseMessageConverter(this.logger).convert(ern);
    }

    if (this.isPurgeReleaseMessage(ern)) {
      return new PurgeReleaseMessageConverter(this.logger).convert(ern);
    }

    throw new Error("unknown/unsupported conversion");
  }

  private isNewReleaseMessage(
    ern: Ern382.Ern<Ern382.Actions>,
  ): ern is Ern382.Ern<Ern382.Actions.NEW_RELEASE_MESSAGE> {
    return ern.action === Ern382.Actions.NEW_RELEASE_MESSAGE;
  }

  private isPurgeReleaseMessage(
    ern: Ern382.Ern<Ern382.Actions>,
  ): ern is Ern382.Ern<Ern382.Actions.PURGE_RELEASE_MESSAGE> {
    return ern.action === Ern382.Actions.PURGE_RELEASE_MESSAGE;
  }
}
