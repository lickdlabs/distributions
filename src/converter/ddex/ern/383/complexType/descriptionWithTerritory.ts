import { Ern383, Ern411 } from "../../../../../types";

export const convertDescriptionWithTerritory = (
  description: Ern383.Description,
): Ern411.DescriptionWithTerritory => ({
  _attributes: description._attributes
    ? {
        languageAndScriptCode: description._attributes.languageAndScriptCode,
        applicableTerritoryCode: undefined,
        isDefault: undefined,
      }
    : undefined,
  value: description.value,
});
