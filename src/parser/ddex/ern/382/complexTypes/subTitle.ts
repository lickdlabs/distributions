import { Ern382 } from "../../../../../types";

export const parseSubTitle = (object: any): Ern382.SubTitle => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  value: object._ || object,
});
