import { ILogger } from "@lickd/logger";
import { Ern } from "../types";

export class Normaliser {
  public constructor(private logger: ILogger) {}

  public normalise<TErn extends Ern>(ern: TErn): TErn {
    this.logger.info(`normalising ddex ern`, {
      version: ern.version,
      action: ern.action,
    });

    return ern;
  }
}
