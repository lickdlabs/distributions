import { ILogger } from "@lickd/logger";
import { IConverter } from "../../interfaces/converter";
import { TDistro, EDistroType, TDistroDdexVersion } from "../../types";
import * as v4 from "../../types/ddex/4";
import { Ddex4 } from "./4";

export class Ddex implements IConverter {
  public constructor(
    private logger: ILogger,
    private version: TDistroDdexVersion,
  ) {}

  public convert(distro: TDistro<EDistroType>): TDistro<EDistroType.DDEX> {
    if (distro.type === EDistroType.DDEX && distro.version === this.version) {
      return distro;
    }

    this.logger.info("converting distribution to ddex", {
      version: this.version,
    });

    if (this.isV4(this.version)) {
      return new Ddex4(this.logger, this.version).convert(distro);
    }

    throw new Error(`unsupported/unknown version: ${this.version}`);
  }

  private isV4(version: TDistroDdexVersion): version is v4.EDistroDdexVersion {
    return version in v4.EDistroDdexVersion;
  }
}
