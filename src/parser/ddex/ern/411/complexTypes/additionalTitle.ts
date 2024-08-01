import { Ern411 } from "../../../../../types";
import { parseDisplaySubTitle } from "./displaySubTitle";

export const parseAdditionalTitle = (object: any): Ern411.AdditionalTitle => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
        applicableTerritoryCode: object.$.ApplicableTerritoryCode || undefined,
        titleType: object.$.TitleType || undefined,
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
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
