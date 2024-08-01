import { Ern383 } from "../../../../../types";

export const parseReason = (object: any): Ern383.Reason => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  value: object._ || object,
});
