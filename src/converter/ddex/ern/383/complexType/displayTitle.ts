import { Ern383, Ern411 } from "../../../../../types";
import { convertDisplaySubTitle } from "./displaySubTitle";

export const convertDisplayTitleFromTitle = (
  title: Ern383.Title,
): Ern411.DisplayTitle => ({
  _attributes: title._attributes
    ? {
        languageAndScriptCode: title._attributes.languageAndScriptCode,
        applicableTerritoryCode: undefined,
        isDefault: undefined,
      }
    : undefined,
  titleText: title.titleText.value,
  subTitle: title.subTitle
    ? title.subTitle.map((subTitle) => convertDisplaySubTitle(subTitle))
    : undefined,
});

export const convertDisplayTitleFromReferenceTitle = (
  referenceTitle: Ern383.ReferenceTitle,
): Ern411.DisplayTitle => ({
  _attributes: referenceTitle._attributes
    ? {
        languageAndScriptCode: referenceTitle._attributes.languageAndScriptCode,
        applicableTerritoryCode: undefined,
        isDefault: undefined,
      }
    : undefined,
  titleText: referenceTitle.titleText.value,
  subTitle: referenceTitle.subTitle
    ? [convertDisplaySubTitle(referenceTitle.subTitle)]
    : undefined,
});
