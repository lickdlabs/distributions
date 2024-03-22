import { ILogger } from "@lickd/logger";
import { Ern, Ern411 } from "../../../../types";

export class Ern411Converter {
  public constructor(private logger: ILogger) {}

  public convert(ern: Ern): Ern411.Ern<Ern411.Actions> {
    this.logger.info("converting to ern 411 from", {
      version: ern.version,
      action: ern.action,
    });

    if (ern.version === 411) {
      return ern;
    }

    throw new Error("unknown/unsupported conversion");
  }
}
