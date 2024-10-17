import { ILogger } from "@lickd/logger";
import { Erns, ErnVersions } from "../types";
import { Ern411Normaliser } from "./ddex";

export class Normaliser {
  public constructor(private logger: ILogger) {}

  public normalise(ern: Erns): void {
    this.logger.info(`normalising ddex ern`, {
      version: ern.version,
      action: ern.action,
    });

    switch (ern.version) {
      case ErnVersions.ERN_411:
        return new Ern411Normaliser(this.logger).normalise(ern);
    }
  }
}
