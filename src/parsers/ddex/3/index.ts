import { ILogger } from "@lickd/logger";
import { IParser } from "../../../interfaces/parser";
import { EDistroType, TDistro } from "../../../types";
import * as v3 from "../../../types/ddex/3";
import { Ddex38 } from "./8";

export class Ddex3 implements IParser {
  public constructor(
    private logger: ILogger,
    private version: v3.TDistroDdexVersion,
  ) {}

  public async parse(object: any): Promise<TDistro<EDistroType.DDEX>> {
    const key = Object.keys(object)[0];
    const action = this.detectAction(key);

    this.logger.info("parsing ddex action", { action });

    return {
      type: EDistroType.DDEX,
      version: this.version,
      action,
      message: this.parseMessage(action, object[key]),
    };
  }

  private detectAction(key: string): v3.EDistroDdexAction {
    if (key === "ern:NewReleaseMessage") {
      return v3.EDistroDdexAction.NEW_RELEASE;
    }

    if (key === "ern:CatalogListMessage") {
      return v3.EDistroDdexAction.CATALOG_LIST;
    }

    if (key === "ern:PurgeReleaseMessage") {
      return v3.EDistroDdexAction.PURGE_RELEASE;
    }

    throw new Error(`unsupported/unknown action: ${key}`);
  }

  private parseMessage(action: v3.EDistroDdexAction, object: any) {
    switch (action) {
      case v3.EDistroDdexAction.NEW_RELEASE:
        return this.parseNewReleaseMessage(object);

      case v3.EDistroDdexAction.CATALOG_LIST:
      case v3.EDistroDdexAction.PURGE_RELEASE:
        throw new Error("not implemented yet");
    }
  }

  private parseNewReleaseMessage(object: any): v3.TNewReleaseMessage {
    switch (this.version) {
      case v3.EDistroDdexVersion.V38:
      case v3.EDistroDdexVersion.V381:
      case v3.EDistroDdexVersion.V382:
      case v3.EDistroDdexVersion.V383:
        return new Ddex38(this.logger).parseNewReleaseMessage(object);
    }
  }
}
