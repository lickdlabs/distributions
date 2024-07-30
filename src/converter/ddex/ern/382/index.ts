import { ILogger } from "@lickd/logger";
import { Ern382, Ern383 } from "../../../../types";
import {
  convertNewReleaseMessage,
  convertPurgeReleaseMessage,
} from "./elements";

export class Ern382Converter {
  public constructor(private logger: ILogger) {}

  public convert(ern: Ern382.Ern): Ern383.Ern {
    switch (ern.action) {
      case Ern383.Actions.NEW_RELEASE_MESSAGE:
        return convertNewReleaseMessage(ern);

      case Ern383.Actions.PURGE_RELEASE_MESSAGE:
        return convertPurgeReleaseMessage(ern);

      default:
        throw new Error("unknown/unsupported conversion");
    }
  }
}
