import { Ern383, Ern411 } from "../../../../../types";

export const convertDisplayArtistNameWithDefault = (
  name: Ern383.Name,
): Ern411.DisplayArtistNameWithDefault => ({
  _attributes: name._attributes
    ? {
        languageAndScriptCode: name._attributes.languageAndScriptCode,
        applicableTerritoryCode: undefined,
        isDefault: undefined,
      }
    : undefined,
  value: name.value,
});
