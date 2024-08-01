import { Ern382 } from "../../../../../types";

export const parseTitleText = (object: any): Ern382.TitleText => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  value: object._ || object,
});
