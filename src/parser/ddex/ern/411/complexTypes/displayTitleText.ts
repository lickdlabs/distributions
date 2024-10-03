import { Ern411 } from "../../../../../types";

export const parseDisplayTitleText = (
  object: any,
): Ern411.DisplayTitleText => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
        applicableTerritoryCode: object.$.ApplicableTerritoryCode || undefined,
        isDefault: object.$.IsDefault
          ? object.$.IsDefault === "true"
          : undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
