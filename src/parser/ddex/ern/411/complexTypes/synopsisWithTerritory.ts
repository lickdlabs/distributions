import { Ern411 } from "../../../../../types";

export const parseSynopsisWithTerritory = (
  object: any,
): Ern411.SynopsisWithTerritory => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
        applicableTerritoryCode: object.$.ApplicableTerritoryCode || undefined,
        isDefault: object.$.IsDefault
          ? object.$.IsDefault === "true"
          : undefined,
        isShortSynopsis: object.$.IsShortSynopsis
          ? object.$.IsShortSynopsis === "true"
          : undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
