import { Ern383 } from "../../../../../types";

export const parseTitleText = (object: any): Ern383.TitleText => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  value: object._ || object,
});
