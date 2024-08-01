import { Ern411 } from "../../../../../types";
import { convertDurationToMilliseconds } from "../../../../../utils";
import { parseAvRating } from "./avRating";
import { parseAdditionalTitle } from "./additionalTitle";
import { parseAdministratingRecordCompanyWithReference } from "./administratingRecordCompanyWithReference";
import { parseCLineWithDefault } from "./cLineWithDefault";
import { parseCourtesyLineWithDefault } from "./courtesyLineWithDefault";
import { parseDeity } from "./deity";
import { parseDisplayArtist } from "./displayArtist";
import { parseDisplayArtistNameWithDefault } from "./displayArtistNameWithDefault";
import { parseDisplayTitle } from "./displayTitle";
import { parseDisplayTitleText } from "./displayTitleText";
import { parseEventDateWithDefault } from "./eventDateWithDefault";
import { parseGenreWithTerritory } from "./genreWithTerritory";
import { parseParentalWarningTypeWithTerritory } from "./parentalWarningTypeWithTerritory";
import { parsePLineWithDefault } from "./pLineWithDefault";
import { parseRaga } from "./raga";
import { parseReleaseId } from "./releaseId";
import { parseReleaseLabelReference } from "./releaseLabelReference";
import { parseReleaseTypeForReleaseNotification } from "./releaseTypeForReleaseNotification";
import { parseResourceGroup } from "./resourceGroup";
import { parseTala } from "./tala";
import { parseMarketingComment } from "./marketingComment";
import { parseRelatedRelease } from "./relatedRelease";
import { parseSynopsisWithTerritory } from "./synopsisWithTerritory";
import { parseKeywordsWithTerritory } from "./keywordsWithTerritory";
import { parseExternalResourceLink } from "./externalResourceLink";

export const parseRelease = (object: any): Ern411.Release => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  releaseReference: object.ReleaseReference[0],
  releaseType: object.ReleaseType.map((releaseType: any) =>
    parseReleaseTypeForReleaseNotification(releaseType),
  ),
  releaseId: parseReleaseId(object.ReleaseId[0]),
  displayTitleText: object.DisplayTitleText.map((displayTitleText: any) =>
    parseDisplayTitleText(displayTitleText),
  ),
  displayTitle: object.DisplayTitle.map((displayTitle: any) =>
    parseDisplayTitle(displayTitle),
  ),
  additionalTitle: object.AdditionalTitle
    ? object.AdditionalTitle.map((additionalTitle: any) =>
        parseAdditionalTitle(additionalTitle),
      )
    : undefined,
  displayArtistName: object.DisplayArtistName.map((displayArtistName: any) =>
    parseDisplayArtistNameWithDefault(displayArtistName),
  ),
  displayArtist: object.DisplayArtist.map((displayArtist: any) =>
    parseDisplayArtist(displayArtist),
  ),
  releaseLabelReference: object.ReleaseLabelReference.map(
    (releaseLabelReference: any) =>
      parseReleaseLabelReference(releaseLabelReference),
  ),
  administratingRecordCompany: object.AdministratingRecordCompany
    ? object.AdministratingRecordCompany.map(
        (administratingRecordCompany: any) =>
          parseAdministratingRecordCompanyWithReference(
            administratingRecordCompany,
          ),
      )
    : undefined,
  pLine: object.PLine
    ? object.PLine.map((pLine: any) => parsePLineWithDefault(pLine))
    : undefined,
  cLine: object.CLine
    ? object.CLine.map((cLine: any) => parseCLineWithDefault(cLine))
    : undefined,
  courtesyLine: object.CourtesyLine
    ? object.CourtesyLine.map((courtesyLine: any) =>
        parseCourtesyLineWithDefault(courtesyLine),
      )
    : undefined,
  duration: object.Duration
    ? convertDurationToMilliseconds(object.Duration[0])
    : undefined,
  genre: object.Genre.map((genre: any) => parseGenreWithTerritory(genre)),
  releaseDate: object.ReleaseDate
    ? object.ReleaseDate.map((releaseDate: any) =>
        parseEventDateWithDefault(releaseDate),
      )
    : undefined,
  originalReleaseDate: object.OriginalReleaseDate
    ? object.OriginalReleaseDate.map((originalReleaseDate: any) =>
        parseEventDateWithDefault(originalReleaseDate),
      )
    : undefined,
  parentalWarningType: object.ParentalWarningType.map(
    (parentalWarningType: any) =>
      parseParentalWarningTypeWithTerritory(parentalWarningType),
  ),
  avRating: object.AvRating
    ? object.AvRating.map((avRating: any) => parseAvRating(avRating))
    : undefined,
  relatedRelease: object.RelatedRelease
    ? object.RelatedRelease.map((relatedRelease: any) =>
        parseRelatedRelease(relatedRelease),
      )
    : undefined,
  ...parseIsCompilationChoice(object),
  resourceGroup: parseResourceGroup(object.ResourceGroup[0]),
  externalResourceLink: object.ExternalResourceLink
    ? object.ExternalResourceLink.map((externalResourceLink: any) =>
        parseExternalResourceLink(externalResourceLink),
      )
    : undefined,
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
  raga: object.Raga
    ? object.Raga.map((raga: any) => parseRaga(raga))
    : undefined,
  tala: object.Tala
    ? object.Tala.map((tala: any) => parseTala(tala))
    : undefined,
  deity: object.Deity
    ? object.Deity.map((deity: any) => parseDeity(deity))
    : undefined,
  hiResMusicDescription: object.HiResMusicDescription
    ? object.HiResMusicDescription[0]
    : undefined,
  isSoundtrack: object.IsSoundtrack
    ? object.IsSoundtrack === "true"
    : undefined,
  isHiResMusic: object.IsHiResMusic
    ? object.IsHiResMusic === "true"
    : undefined,
  marketingComment: object.MarketingComment
    ? object.MarketingComment.map((marketingComment: any) =>
        parseMarketingComment(marketingComment),
      )
    : undefined,
});

const parseIsCompilationChoice = (
  object: any,
): Partial<Ern411.IsCompilationChoice> => {
  if (object.IsCompilation) {
    return {
      isCompilation: object.IsCompilation[0] === "true",
    };
  }

  if (object.IsMultiArtistCompilation) {
    return {
      isMultiArtistCompilation: object.IsMultiArtistCompilation[0] === "true",
    };
  }

  return {};
};
