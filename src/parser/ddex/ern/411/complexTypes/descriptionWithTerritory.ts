import { Ern411 } from "../../../../../types";

export const parseDescriptionWithTerritory = (
  object: any,
): Ern411.DescriptionWithTerritory => ({
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
