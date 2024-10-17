import { ConsoleLogger, ILogger } from "@lickd/logger";
import { Converter } from "./converter";
import { Normaliser } from "./normaliser";
import { Parser } from "./parser";
import { Ern, ErnVersions } from "./types";

type DistributionsOptions<TVersion extends ErnVersions> = {
  version?: TVersion;
  normalise?: boolean;
};

export class Distributions {
  private logger: ILogger;

  private parser: Parser;

  private converter: Converter;

  private normaliser: Normaliser;

  public constructor(
    logger?: ILogger,
    parser?: Parser,
    converter?: Converter,
    normaliser?: Normaliser,
  ) {
    this.logger = logger ?? new ConsoleLogger();
    this.parser = parser ?? new Parser(this.logger);
    this.converter = converter ?? new Converter(this.logger);
    this.normaliser = normaliser ?? new Normaliser(this.logger);
  }

  public async parse<TVersion extends ErnVersions>(
    body: string,
    options?: DistributionsOptions<TVersion>,
  ): Promise<Ern[TVersion]> {
    let distro = await this.parser.parse(body);

    if (options?.version) {
      distro = this.converter.convert(distro, options.version);
    }

    if (options?.normalise) {
      this.normaliser.normalise(distro);
    }

    return distro as Ern[TVersion];
  }
}
