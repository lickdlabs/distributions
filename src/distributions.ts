import { ILogger } from "@lickd/logger";
import { convert } from "./converter";
import { Logger } from "./logger";
import { normalise } from "./normaliser";
import { parse } from "./parser";
import { Ern, ErnVersions } from "./types";

type DistributionsOptions<TVersion extends ErnVersions> = {
  version?: TVersion;
  normalise?: boolean;
};

export class Distributions {
  public constructor(logger?: ILogger) {
    if (logger) {
      Logger.setLogger(logger);
    }
  }

  public async parse<TVersion extends ErnVersions>(
    body: string,
    options?: DistributionsOptions<TVersion>,
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
