import { Ern383 } from "../../../../../types";
import { parseSubTitle } from "./subTitle";
import { parseTitleText } from "./titleText";

export const parseTitle = (object: any): Ern383.Title => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
        titleType: object.$.TitleType || undefined,
      }
    : undefined,
  titleText: parseTitleText(object.TitleText[0]),
  subTitle: object.SubTitle
    ? object.SubTitle.map((subTitle: any) => parseSubTitle(subTitle))
    : undefined,
});
