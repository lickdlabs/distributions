import { ILogger } from "@lickd/logger";
import { Ern, Ern383 } from "../../../../types";

export class Ern383Converter {
  public constructor(private logger: ILogger) {}

  public convert(ern: Ern): Ern383.Ern {
    this.logger.info("converting to ern 383 from", {
      version: ern.version,
      action: ern.action,
    });

    switch (ern.version) {
      case 382:
        return {
          ...ern,
          version: 383,
        };

      case 383:
        return ern;
    }

    throw new Error("unknown/unsupported conversion");
  }
}
