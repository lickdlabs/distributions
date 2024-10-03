import { Ern411 } from "../../../../../types";

export const parseName = (object: any): Ern411.Name => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
