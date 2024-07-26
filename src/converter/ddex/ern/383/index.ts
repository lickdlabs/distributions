import { ILogger } from "@lickd/logger";
import { Ern383, Ern411 } from "../../../../types";
import { Ern411Converter } from "../411";

export class Ern383Converter {
  public constructor(private logger: ILogger) {}

  public convert(ern: Ern383.Ern): Ern411.Ern {
    this.logger.info(`converting from ${ern.version} to 411`);

    return new Ern411Converter(this.logger).convert(ern);
  }
}
