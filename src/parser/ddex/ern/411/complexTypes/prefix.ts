import { Ern411 } from "../../../../../types";

export const parsePrefix = (object: any): Ern411.Prefix => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  value: object._ || object,
});
