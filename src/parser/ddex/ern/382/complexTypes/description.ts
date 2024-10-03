import { Ern382 } from "../../../../../types";

export const parseDescription = (object: any): Ern382.Description => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
