import { Ern382 } from "../../../../../types";

export const parseSynopsis = (object: any): Ern382.Synopsis => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  value: object._ || object,
});
