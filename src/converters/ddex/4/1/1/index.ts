import { ILogger } from "@lickd/logger";
import { IConverter } from "../../../../../interfaces/converter";
import { EDistroType, TDistro } from "../../../../../types";
import * as v4 from "../../../../../types/ddex/4";
import { Ddex3 } from "./sources/ddex/3";
import { isDdexV3 } from "../../../../../utils";

export class Ddex411 implements IConverter {
  public constructor(private logger: ILogger) {}

  public convert(
    distro: TDistro<EDistroType>,
  ): TDistro<EDistroType.DDEX> &
    v4.TDistroDdex<v4.EDistroDdexVersion.V411, v4.EDistroDdexAction> {
    switch (distro.type) {
      case EDistroType.DDEX:
        return this.fromDdex(distro);
    }
  }

  private fromDdex(
    distro: TDistro<EDistroType.DDEX>,
  ): TDistro<EDistroType.DDEX> &
    v4.TDistroDdex<v4.EDistroDdexVersion.V411, v4.EDistroDdexAction> {
    this.logger.info("converting distribution from ddex", {
      version: distro.version,
    });

    if (isDdexV3(distro)) {
      return new Ddex3(this.logger).convert(distro);
    }

    throw new Error();
  }
}
