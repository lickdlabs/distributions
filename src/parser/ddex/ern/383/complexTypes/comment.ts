import { Ern383 } from "../../../../../types";

export const parseComment = (object: any): Ern383.Comment => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  value: object._ || object,
});
