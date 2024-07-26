import { ILogger } from "@lickd/logger";
import { Ern383, Ern411 } from "../../../../types";
import { NewReleaseMessageConverter } from "./newReleaseMessage";
import { PurgeReleaseMessageConverter } from "./purgeReleaseMessage";

export class Ern383Converter {
  public constructor(private logger: ILogger) {}

  public convert(ern: Ern383.Ern): Ern411.Ern {
    this.logger.info(`converting from ${ern.version} to 411`);

    if (ern.action === Ern383.Actions.NEW_RELEASE_MESSAGE) {
      return new NewReleaseMessageConverter(this.logger).convert(ern);
    }

    if (ern.action === Ern383.Actions.PURGE_RELEASE_MESSAGE) {
      return new PurgeReleaseMessageConverter(this.logger).convert(ern);
    }

    throw new Error("unknown/unsupported conversion");
  }
}
