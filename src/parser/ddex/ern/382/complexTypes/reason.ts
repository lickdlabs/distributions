import { Ern382 } from "../../../../../types";

export const parseReason = (object: any): Ern382.Reason => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  value: object._ || object,
});
