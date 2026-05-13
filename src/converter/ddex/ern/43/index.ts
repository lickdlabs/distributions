import { ConverterError } from "../../../../errors";
import { Ern411, Ern43, ErnVersions } from "../../../../types";

// 4.3 documents are parsed using the 4.1.1 element parsers (see
// src/parser/ddex/ern/43), so the parsed shape is already structurally
// identical to 4.1.1 — any 4.3-only fields were dropped at parse time.
// The conversion is therefore just a version/action retag.
export const convert43 = (ern: Ern43.Ern): Ern411.Ern => {
  switch (ern.action) {
    case Ern43.Actions.NEW_RELEASE_MESSAGE:
      return {
        ...ern,
        version: ErnVersions.ERN_411,
        action: Ern411.Actions.NEW_RELEASE_MESSAGE,
      };

    case Ern43.Actions.PURGE_RELEASE_MESSAGE:
      return {
        ...ern,
        version: ErnVersions.ERN_411,
        action: Ern411.Actions.PURGE_RELEASE_MESSAGE,
      };

    default:
      throw new ConverterError({
        version: (ern as Ern43.Ern).version,
        action: (ern as Ern43.Ern).action,
        message: "unknown/unsupported action conversion",
      });
  }
};
