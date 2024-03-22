import { ILogger } from "@lickd/logger";
import { Ern383, Ern411 } from "../../../../../types";
import { NewReleaseMessageConverter } from "./newReleaseMessage";
import { PurgeReleaseMessageConverter } from "./purgeReleaseMessage";

export class Ern383Converter {
  public constructor(private logger: ILogger) {}

  public convert(ern: Ern383.Ern<Ern383.Actions>): Ern411.Ern<Ern411.Actions> {
    if (this.isNewReleaseMessage(ern)) {
      return new NewReleaseMessageConverter(this.logger).convert(ern);
    }

    if (this.isPurgeReleaseMessage(ern)) {
      return new PurgeReleaseMessageConverter(this.logger).convert(ern);
    }

    throw new Error("unknown/unsupported conversion");
  }

  private isNewReleaseMessage(
    ern: Ern383.Ern<Ern383.Actions>,
  ): ern is Ern383.Ern<Ern383.Actions.NEW_RELEASE_MESSAGE> {
    return ern.action === Ern383.Actions.NEW_RELEASE_MESSAGE;
  }

  private isPurgeReleaseMessage(
    ern: Ern383.Ern<Ern383.Actions>,
  ): ern is Ern383.Ern<Ern383.Actions.PURGE_RELEASE_MESSAGE> {
    return ern.action === Ern383.Actions.PURGE_RELEASE_MESSAGE;
  }
}
