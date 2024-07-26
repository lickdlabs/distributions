import { ILogger } from "@lickd/logger";
import { Ern } from "../types";
import { Ern382Converter, Ern383Converter } from "./ddex";

export class Converter {
  public constructor(private logger: ILogger) {}

  public convert<TErn extends Ern>(ern: Ern, version: TErn["version"]): TErn {
    while (ern.version !== version) {
      ern = this.step(ern);
    }

    return ern as TErn;
  }

  private step(ern: Ern): Ern {
    switch (ern.version) {
      case 382:
        return new Ern382Converter(this.logger).convert(ern);

      case 383:
        return new Ern383Converter(this.logger).convert(ern);

      default:
        throw new Error("unknown/unsupported conversion");
    }
  }
}
