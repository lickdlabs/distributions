import { Ern383 } from "../../../../../types";

export const parseSynopsis = (object: any): Ern383.Synopsis => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
