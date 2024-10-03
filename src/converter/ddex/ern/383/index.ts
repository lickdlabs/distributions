import { ILogger } from "@lickd/logger";
import { ConverterError } from "../../../../errors";
import { Ern383, Ern411 } from "../../../../types";
import {
  convertNewReleaseMessage,
  convertPurgeReleaseMessage,
} from "./elements";

export class Ern383Converter {
  public constructor(private logger: ILogger) {}

  public convert(ern: Ern383.Ern): Ern411.Ern {
    switch (ern.action) {
      case Ern383.Actions.NEW_RELEASE_MESSAGE:
        return convertNewReleaseMessage(ern);

      case Ern383.Actions.PURGE_RELEASE_MESSAGE:
        return convertPurgeReleaseMessage(ern);

      default:
        throw new ConverterError(
          `unknown/unsupported action conversion (${ern.action})`,
        );
    }
  }
}
