import { convert } from "./converter";
import { Logger } from "./logger";
import { normalise } from "./normaliser";
import { parse } from "./parser";
import { DistributionsOptions, Ern, ErnVersions, ParserOptions } from "./types";

export class Distributions {
  public constructor(options?: DistributionsOptions) {
    if (options?.logger) {
      Logger.setLogger(options.logger);
    }
  }

  public async parse<TVersion extends ErnVersions>(
    body: string,
    options?: ParserOptions<TVersion>,
  ): Promise<Ern[TVersion]> {
    let distro = await parse(body);

    if (options?.version) {
      distro = convert(distro, options.version);
    }

    if (options?.normalise) {
      normalise(distro);
    }

    return distro as Ern[TVersion];
  }
}
