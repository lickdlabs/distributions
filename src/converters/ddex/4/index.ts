import { ILogger } from "@lickd/logger";
import { IConverter } from "../../../interfaces/converter";
import { EDistroType, TDistro } from "../../../types";
import * as v4 from "../../../types/ddex/4";
import { Ddex411 } from "./1/1";

export class Ddex4 implements IConverter {
  public constructor(
    private logger: ILogger,
    private version: v4.EDistroDdexVersion,
  ) {}

  public convert(
    distro: TDistro<EDistroType>,
  ): TDistro<EDistroType.DDEX> &
    v4.TDistroDdex<v4.EDistroDdexVersion, v4.EDistroDdexAction> {
    switch (this.version) {
      case v4.EDistroDdexVersion.V411:
        return new Ddex411(this.logger).convert(distro);
    }
  }
}
