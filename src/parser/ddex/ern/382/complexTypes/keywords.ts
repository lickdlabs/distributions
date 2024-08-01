import { Ern382 } from "../../../../../types";

export const parseKeywords = (object: any): Ern382.Keywords => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  value: object._ || object,
});
