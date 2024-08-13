import { Ern383, Ern411 } from "../../../../../types";

export const convertDisplayTitleText = (
  titleText: Ern383.TitleText,
): Ern411.DisplayTitleText => ({
  _attributes: titleText._attributes
    ? {
        languageAndScriptCode: titleText._attributes.languageAndScriptCode,
        applicableTerritoryCode: undefined,
        isDefault: undefined,
      }
    : undefined,
  value: titleText.value,
});
