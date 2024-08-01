import { Ern382 } from "../../../../../types";
import { parseSubTitle } from "./subTitle";
import { parseTitleText } from "./titleText";

export const parseReferenceTitle = (object: any): Ern382.ReferenceTitle => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  titleText: parseTitleText(object.TitleText[0]),
  subTitle: object.SubTitle ? parseSubTitle(object.SubTitle[0]) : undefined,
});
