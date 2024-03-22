import { ILogger } from "@lickd/logger";
import { Ern, Ern383, Ern411 } from "../types";
import { Ern411Converter } from "./ddex";
import { Ern383Converter } from "./ddex/ern/383";

export class Converter {
  public constructor(private logger: ILogger) {}

  public convertToErn383(ern: Ern): Ern383.Ern<Ern383.Actions> {
    return new Ern383Converter(this.logger).convert(ern);
  }

  public convertToErn411(ern: Ern): Ern411.Ern<Ern411.Actions> {
    return new Ern411Converter(this.logger).convert(ern);
  }
}
