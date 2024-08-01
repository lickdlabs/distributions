import { Ern411 } from "../../../../../types";

export const parseKeywordsWithTerritory = (
  object: any,
): Ern411.KeywordsWithTerritory => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
        applicableTerritoryCode: object.$.ApplicableTerritoryCode || undefined,
        isDefault: object.$.IsDefault
          ? object.$.IsDefault === "true"
          : undefined,
      }
    : undefined,
  value: object._ || object,
});
