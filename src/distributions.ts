import { ConsoleLogger, ILogger } from "@lickd/logger";
import { Converter } from "./converter";
import { Normaliser } from "./normaliser";
import { Parser } from "./parser";
import { Ern } from "./types";

export class Distributions {
  private logger: ILogger;

  private parser: Parser;

  private converter: Converter;

  private normaliser: Normaliser;

  public constructor(logger?: ILogger, parser?: Parser, converter?: Converter, normaliser?: Normaliser) {
    this.logger = logger ?? new ConsoleLogger();
    this.parser = parser ?? new Parser(this.logger);
    this.converter = converter ?? new Converter(this.logger);
    this.normaliser = normaliser ?? new Normaliser(this.logger);
  }

  public async parse(
    body: string,
    forcedVersion?: Ern["version"],
  ): Promise<Ern> {
    return this.parser.parse(body, forcedVersion);
  }

  public convert<TErn extends Ern>(ern: Ern, version: TErn["version"]): TErn {
    return this.converter.convert<TErn>(ern, version);
  }

  public normalise<TErn extends Ern>(ern: TErn): TErn {
    return this.normaliser.normalise<TErn>(ern);
  }
}
