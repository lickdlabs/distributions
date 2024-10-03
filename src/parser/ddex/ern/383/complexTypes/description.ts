import { Ern383 } from "../../../../../types";

export const parseDescription = (object: any): Ern383.Description => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
