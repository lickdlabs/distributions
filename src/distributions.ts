import { ConsoleLogger, ILogger } from "@lickd/logger";
import { Parser } from "./parser";
import { EDistroType, TDistro, TDistroDdexVersion } from "./types";
import { Converter } from "./converter";

export class Distributions {
  private logger: ILogger;

  private parser: Parser;

  private converter: Converter;

  public constructor(logger?: ILogger, parser?: Parser, converter?: Converter) {
    this.logger = logger ?? new ConsoleLogger();
    this.parser = parser ?? new Parser(this.logger);
    this.converter = converter ?? new Converter(this.logger);
  }

  public async parse(body: string): Promise<TDistro<EDistroType>> {
    return this.parser.parse(body);
  }

  public convertToDdex(
    distro: TDistro<EDistroType>,
    version: TDistroDdexVersion,
  ): TDistro<EDistroType.DDEX> {
    return this.converter.convertToDdex(distro, version);
  }
}
