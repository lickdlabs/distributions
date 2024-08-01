import { Ern411 } from "../../../../../types";
import { parseAdditionalTitle } from "./additionalTitle";
import { parseDisplayTitle } from "./displayTitle";
import { parseDisplayTitleText } from "./displayTitleText";
import { parseGenreWithTerritory } from "./genreWithTerritory";
import { parseKeywordsWithTerritory } from "./keywordsWithTerritory";
import { parseLinkedReleaseResourceReference } from "./linkedReleaseResourceReference";
import { parseMarketingComment } from "./marketingComment";
import { parseReleaseId } from "./releaseId";
import { parseReleaseLabelReference } from "./releaseLabelReference";
import { parseSynopsisWithTerritory } from "./synopsisWithTerritory";

export const parseTrackRelease = (object: any): Ern411.TrackRelease => ({
  _attributes: object.$
    ? {
        isMainRelease: object.$.IsMainRelease
          ? object.$.IsMainRelease === "true"
          : undefined,
      }
    : undefined,
  releaseReference: object.ReleaseReference[0],
  releaseId: parseReleaseId(object.ReleaseId[0]),
  displayTitleText: object.DisplayTitleText
    ? object.DisplayTitleText.map((displayTitleText: any) =>
        parseDisplayTitleText(displayTitleText),
      )
    : undefined,
  displayTitle: object.DisplayTitle
    ? object.DisplayTitle.map((displayTitle: any) =>
        parseDisplayTitle(displayTitle),
      )
    : undefined,
  additionalTitle: object.AdditionalTitle
    ? object.AdditionalTitle.map((additionalTitle: any) =>
        parseAdditionalTitle(additionalTitle),
      )
    : undefined,
  releaseResourceReference: object.ReleaseResourceReference[0],
  linkedReleaseResourceReference: object.LinkedReleaseResourceReference
    ? object.LinkedReleaseResourceReference.map(
        (linkedReleaseResourceReference: any) =>
          parseLinkedReleaseResourceReference(linkedReleaseResourceReference),
      )
    : undefined,
  releaseLabelReference: object.ReleaseLabelReference.map(
    (releaseLabelReference: any) =>
      parseReleaseLabelReference(releaseLabelReference),
  ),
  genre: object.Genre.map((genre: any) => parseGenreWithTerritory(genre)),
  keywords: object.Keywords
    ? object.Keywords.map((keywords: any) =>
        parseKeywordsWithTerritory(keywords),
      )
    : undefined,
  synopsis: object.Synopsis
    ? object.Synopsis.map((synopsis: any) =>
        parseSynopsisWithTerritory(synopsis),
      )
    : undefined,
  marketingComment: object.MarketingComment
    ? object.MarketingComment.map((marketingComment: any) =>
        parseMarketingComment(marketingComment),
      )
    : undefined,
});
