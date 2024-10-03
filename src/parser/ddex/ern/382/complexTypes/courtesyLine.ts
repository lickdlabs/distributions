import { Ern382 } from "../../../../../types";

export const parseCourtesyLine = (object: any): Ern382.CourtesyLine => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
