import { Ern383 } from "../../../../../types";

export const parseCourtesyLine = (object: any): Ern383.CourtesyLine => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
