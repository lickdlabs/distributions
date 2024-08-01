import { Ern411 } from "../../../../../types";
import { parsePrefix } from "./prefix";

export const parseTitleDisplayInformation = (
  object: any,
): Ern411.TitleDisplayInformation => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
        sequenceNumber: object.$.SequenceNumber
          ? parseInt(object.$.SequenceNumber)
          : undefined,
      }
    : undefined,
  isDisplayedInTitle: object.IsDisplayedInTitle[0] === "true",
  prefix: object.Prefix
    ? object.Prefix.map((prefix: any) => parsePrefix(prefix))
    : undefined,
});
