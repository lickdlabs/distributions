import { Ern383, Ern411 } from "../../../../../types";

export const convertMarketingComment = (
  comment: Ern383.Comment,
): Ern411.MarketingComment => ({
  _attributes: comment._attributes
    ? {
        languageAndScriptCode: comment._attributes.languageAndScriptCode,
      }
    : undefined,
  value: comment.value,
});
