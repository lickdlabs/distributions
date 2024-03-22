import { ILogger } from "@lickd/logger";
import { Ern, Ern383 } from "../../../../types";

export class Ern383Converter {
  public constructor(private logger: ILogger) {}

  public convert(ern: Ern): Ern383.Ern<Ern383.Actions> {
    this.logger.info("converting to ern 383 from", {
      version: ern.version,
      action: ern.action,
    });

    if (ern.version === 383) {
      return ern;
    }

    if (ern.version === 382) {
      return {
        ...ern,
        version: 383,
      };
    }

    throw new Error("unknown/unsupported conversion");
  }
}
