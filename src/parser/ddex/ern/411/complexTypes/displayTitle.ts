import { Ern411 } from "../../../../../types";
import { parseDisplaySubTitle } from "./displaySubTitle";

export const parseDisplayTitle = (object: any): Ern411.DisplayTitle => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
        applicableTerritoryCode: object.$.ApplicableTerritoryCode || undefined,
        isDefault: object.$.IsDefault
          ? object.$.IsDefault === "true"
          : undefined,
      }
    : undefined,
  titleText: object.TitleText[0],
  subTitle: object.SubTitle
    ? object.SubTitle.map((subTitle: any) => parseDisplaySubTitle(subTitle))
    : undefined,
});
