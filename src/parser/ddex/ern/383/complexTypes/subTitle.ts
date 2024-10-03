import { Ern383 } from "../../../../../types";

export const parseSubTitle = (object: any): Ern383.SubTitle => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
