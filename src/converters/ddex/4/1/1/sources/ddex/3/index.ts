import { ILogger } from "@lickd/logger";
import { IConverter } from "../../../../../../../../interfaces/converter";
import { EDistroType, TDistro } from "../../../../../../../../types";
import * as v3 from "../../../../../../../../types/ddex/3";
import * as v4 from "../../../../../../../../types/ddex/4";
import { isDdexV3NewRelease } from "../../../../../../../../utils";
import { Ddex38 } from "./8";

export class Ddex3 implements IConverter {
  public constructor(private logger: ILogger) {}

  public convert(
    distro: TDistro<EDistroType.DDEX> &
      v3.TDistroDdex<v3.EDistroDdexVersion, v3.EDistroDdexAction>,
  ): TDistro<EDistroType.DDEX> &
    v4.TDistroDdex<v4.EDistroDdexVersion.V411, v4.EDistroDdexAction> {
    const action = this.detectAction(distro.action);

    this.logger.info("converting distribution to ddex action", { action });

    return {
      type: EDistroType.DDEX,
      version: v4.EDistroDdexVersion.V411,
      action,
      message: this.convertMessage(action, distro),
    };
  }

  private detectAction(action: v3.EDistroDdexAction): v4.EDistroDdexAction {
    if (action === v3.EDistroDdexAction.NEW_RELEASE) {
      return v4.EDistroDdexAction.NEW_RELEASE;
    }

    if (action === v3.EDistroDdexAction.PURGE_RELEASE) {
      return v4.EDistroDdexAction.PURGE_RELEASE;
    }

    throw new Error(`unsupported/unknown action: ${action}`);
  }

  private convertMessage(
    action: v4.EDistroDdexAction,
    distro: TDistro<EDistroType.DDEX> &
      v3.TDistroDdex<v3.EDistroDdexVersion, v3.EDistroDdexAction>,
  ): v4.TMessage {
    if (
      action === v4.EDistroDdexAction.NEW_RELEASE &&
      isDdexV3NewRelease(distro)
    ) {
      return this.convertNewReleaseMessage(distro);
    }

    throw new Error(`unsupported/unknown action: ${distro.action}`);
  }

  private convertNewReleaseMessage(
    distro: TDistro<EDistroType.DDEX> &
      v3.TDistroDdex<v3.EDistroDdexVersion, v3.EDistroDdexAction.NEW_RELEASE>,
  ): v4.TNewReleaseMessage {
    switch (distro.version) {
      case v3.EDistroDdexVersion.V38:
      case v3.EDistroDdexVersion.V381:
      case v3.EDistroDdexVersion.V382:
      case v3.EDistroDdexVersion.V383:
        return new Ddex38(this.logger).convertNewReleaseMessage(distro);
    }
  }
}
