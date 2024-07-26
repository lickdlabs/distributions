import { ConsoleLogger, ILogger } from "@lickd/logger";
import { Converter } from "./converter";
import { Parser } from "./parser";
import { Ern } from "./types";

export class Distributions {
  private logger: ILogger;

  private parser: Parser;

  private converter: Converter;

  public constructor(logger?: ILogger, parser?: Parser, converter?: Converter) {
    this.logger = logger ?? new ConsoleLogger();
    this.parser = parser ?? new Parser(this.logger);
    this.converter = converter ?? new Converter(this.logger);
  }

  public async parse(body: string): Promise<Ern> {
    return this.parser.parse(body);
  }

  public convert<TErn extends Ern>(ern: Ern, version: TErn["version"]): Ern {
    return this.converter.convert<TErn>(ern, version);
  }
}
