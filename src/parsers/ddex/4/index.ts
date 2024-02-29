import { ILogger } from "@lickd/logger";
import { IParser } from "../../../interfaces/parser";
import { EDistroType, TDistro } from "../../../types";
import * as v4 from "../../../types/ddex/4";
import { Ddex411 } from "./1/1";

export class Ddex4 implements IParser {
  public constructor(
    private logger: ILogger,
    private version: v4.TDistroDdexVersion,
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

  private detectAction(key: string): v4.EDistroDdexAction {
    if (key === "ern:NewReleaseMessage") {
      return v4.EDistroDdexAction.NEW_RELEASE;
    }

    if (key === "ern:PurgeReleaseMessage") {
      return v4.EDistroDdexAction.PURGE_RELEASE;
    }

    throw new Error(`unsupported/unknown action: ${key}`);
  }

  private parseMessage(action: v4.EDistroDdexAction, object: any): v4.TMessage {
    switch (action) {
      case v4.EDistroDdexAction.NEW_RELEASE:
        return this.parseNewReleaseMessage(object);

      case v4.EDistroDdexAction.PURGE_RELEASE:
        throw new Error("not implemented yet");
    }
  }

  private parseNewReleaseMessage(object: any): v4.TNewReleaseMessage {
    switch (this.version) {
      case v4.EDistroDdexVersion.V411:
        return new Ddex411(this.logger).parseNewReleaseMessage(object);
    }
  }
}
