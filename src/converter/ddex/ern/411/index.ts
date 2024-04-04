import { ILogger } from "@lickd/logger";
import { Ern, Ern411 } from "../../../../types";
import { Ern382Converter } from "./382";
import { Ern383Converter } from "./383";

export class Ern411Converter {
  public constructor(private logger: ILogger) {}

  public convert(ern: Ern): Ern411.Ern {
    this.logger.info(`converting ddex ern ${ern.version} to 411`, {
      action: ern.action,
    });

    const converted = this.convertErn(ern);

    this.logger.info(`successfully converted ddex ern ${ern.version} to 411`, {
      action: ern.action,
    });

    return converted;
  }

  private convertErn(ern: Ern): Ern411.Ern {
    switch (ern.version) {
      case 382:
        return new Ern382Converter(this.logger).convert(ern);

      case 383:
        return new Ern383Converter(this.logger).convert(ern);

      case 411:
        return ern;
    }
  }
}
