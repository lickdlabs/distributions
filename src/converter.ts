import { ILogger } from "@lickd/logger";
import { EDistroType, TDistro, TDistroDdexVersion } from "./types";
import { Ddex } from "./converters";

export class Converter {
  public constructor(private logger: ILogger) {}

  public convertToDdex(
    distro: TDistro<EDistroType>,
    version: TDistroDdexVersion,
  ): TDistro<EDistroType.DDEX> {
    return new Ddex(this.logger, version).convert(distro);
  }
}
