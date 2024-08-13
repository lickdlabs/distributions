import { Ern383, Ern411 } from "../../../../../types";

export const convertSynopsisWithTerritory = (
  ern: Ern383.Synopsis,
): Ern411.SynopsisWithTerritory => ({
  _attributes: ern._attributes
    ? {
        languageAndScriptCode: ern._attributes.languageAndScriptCode,
        applicableTerritoryCode: undefined,
        isDefault: undefined,
        isShortSynopsis: undefined,
      }
    : undefined,
  value: ern.value,
});
