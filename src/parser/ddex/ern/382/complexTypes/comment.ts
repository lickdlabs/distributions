import { Ern382 } from "../../../../../types";

export const parseComment = (object: any): Ern382.Comment => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
