import { convert } from "./converter";
import { Logger } from "./logger";
import { normalise } from "./normaliser";
import { parse } from "./parser";
import {
  DistributionsOptions,
  Ern,
  Erns,
  ErnVersions,
  ParserOptions,
} from "./types";

export class Distributions {
  public constructor(options?: DistributionsOptions) {
    if (options?.logger) {
      Logger.setLogger(options.logger);
    }
  }

  public async parse<TVersion extends ErnVersions>(
    distro: Erns | string,
    options?: ParserOptions<TVersion>,
  ): Promise<Ern[TVersion]> {
    if (typeof distro === "string") {
      distro = await parse(distro);
    }

    if (options?.version) {
      distro = convert(distro, options.version);
    }

    if (options?.normalise) {
      normalise(distro);
    }

    return distro as Ern[TVersion];
  }
}
