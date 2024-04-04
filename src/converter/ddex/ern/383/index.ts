import { ILogger } from "@lickd/logger";
import { Ern, Ern383 } from "../../../../types";

export class Ern383Converter {
  public constructor(private logger: ILogger) {}

  public convert(ern: Ern): Ern383.Ern {
    this.logger.info(`converting ddex ern ${ern.version} to 383`, {
      action: ern.action,
    });

    const converted = this.convertErn(ern);

    this.logger.info(`successfully converted ddex ern ${ern.version} to 383`, {
      action: ern.action,
    });

    return converted;
  }

  private convertErn(ern: Ern): Ern383.Ern {
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
