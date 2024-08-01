import { Ern383 } from "../../../../../types";

export const parseKeywords = (object: any): Ern383.Keywords => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  value: object._ || object,
});
