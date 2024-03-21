import { ILogger } from "@lickd/logger";
import { Ern, Ern411 } from "../types";
import { Ern411Converter } from "./ddex";

export class Converter {
  public constructor(private logger: ILogger) {}

  public convertToErn411(ern: Ern): Ern411.Ern<Ern411.Actions> {
    return new Ern411Converter(this.logger).convert(ern);
  }
}
