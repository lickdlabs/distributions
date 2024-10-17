import { ConverterError } from "../../../../errors";
import { Ern382, Ern383 } from "../../../../types";
import {
  convertNewReleaseMessage,
  convertPurgeReleaseMessage,
} from "./elements";

export const convert382 = (ern: Ern382.Ern): Ern383.Ern => {
  switch (ern.action) {
    case Ern383.Actions.NEW_RELEASE_MESSAGE:
      return convertNewReleaseMessage(ern);

    case Ern383.Actions.PURGE_RELEASE_MESSAGE:
      return convertPurgeReleaseMessage(ern);

    default:
      throw new ConverterError({
        version: ern.version,
        action: ern.action,
        message: "unknown/unsupported action conversion",
      });
  }
};
