import { ConverterError } from "../../../../errors";
import { Ern383, Ern411 } from "../../../../types";
import {
  convertNewReleaseMessage,
  convertPurgeReleaseMessage,
} from "./elements";

export const convert383 = (ern: Ern383.Ern): Ern411.Ern => {
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
