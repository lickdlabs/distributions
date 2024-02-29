import { ILogger } from "@lickd/logger";
import { Parser } from "./parser";
import { EDistroType, TDistro, TDistroDdexVersion } from "./types";
import { Converter } from "./converter";

export class Distributions {
  private parser: Parser;

  private converter: Converter;

  public constructor(
    private logger: ILogger,
    parser?: Parser,
    converter?: Converter,
  ) {
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
