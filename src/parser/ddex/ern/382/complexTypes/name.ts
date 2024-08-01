import { Ern382 } from "../../../../../types";

export const parseName = (object: any): Ern382.Name => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  value: object._ || object,
});
