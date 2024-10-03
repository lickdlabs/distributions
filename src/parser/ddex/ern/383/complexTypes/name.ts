import { Ern383 } from "../../../../../types";

export const parseName = (object: any): Ern383.Name => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
