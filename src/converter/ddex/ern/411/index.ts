import { ILogger } from "@lickd/logger";
import { Ern, Ern411 } from "../../../../types";
import { Ern382Converter } from "./382";
import { Ern383Converter } from "./383";

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

    switch (ern.version) {
      case 382:
        return new Ern382Converter(this.logger).convert(ern);

      case 383:
        return new Ern383Converter(this.logger).convert(ern);
    }
  }
}
