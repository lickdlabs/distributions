import { ILogger } from "@lickd/logger";
import { IParser } from "../../interfaces/parser";
import { EDistroType, TDistro, TDistroDdexVersion } from "../../types";
import * as v3 from "../../types/ddex/3";
import * as v4 from "../../types/ddex/4";
import { Ddex3 } from "./3";
import { Ddex4 } from "./4";

export class Ddex implements IParser {
  public constructor(private logger: ILogger) {}

  public async parse(object: any): Promise<TDistro<EDistroType>> {
    const version = this.detectVersion(object);

    this.logger.info("parsing ddex version", { version });

    if (this.isV3(version)) {
      return new Ddex3(this.logger, version).parse(object);
    }

    if (this.isV4(version)) {
      return new Ddex4(this.logger, version).parse(object);
    }

    throw new Error(`unsupported/unknown version: ${version}`);
  }

  private detectVersion = (object: any): TDistroDdexVersion => {
    const key = Object.keys(object)[0];
    const ern = object[key].$["xmlns:ern"] as string;

    return parseInt(ern.substring(ern.lastIndexOf("/") + 1));
  };

  private isV3(version: TDistroDdexVersion): version is v3.TDistroDdexVersion {
    return version in v3.EDistroDdexVersion;
  }

  private isV4(version: TDistroDdexVersion): version is v4.TDistroDdexVersion {
    return version in v4.EDistroDdexVersion;
  }
}
