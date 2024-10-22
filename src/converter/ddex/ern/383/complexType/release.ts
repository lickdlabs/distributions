import { Avs411, Ern383, Ern411 } from "../../../../../types";
import { findUnique } from "../../utils";
import { convertAvRating } from "./avRating";
import { convertCLineWithDefault } from "./cLineWithDefault";
import { convertDisplayArtistFromArtist } from "./displayArtist";
import { convertDisplayArtistNameWithDefault } from "./displayArtistNameWithDefault";
import { convertDisplayTitleFromReferenceTitle } from "./displayTitle";
import { convertDisplayTitleText } from "./displayTitleText";
import { convertEventDateWithDefault } from "./eventDateWithDefault";
import { convertExternalResourceLink } from "./externalResourceLink";
import { convertGenreWithTerritory } from "./genreWithTerritory";
import { convertKeywords } from "./keywords";
import { convertMarketingComment } from "./marketingComment";
import { convertParentalWarningTypeWithTerritory } from "./parentalWarningTypeWithTerritory";
import { convertPLineWithDefault } from "./pLineWithDefault";
import { convertRelatedRelease } from "./relatedRelease";
import { convertReleaseId } from "./releaseId";
import { convertReleaseLabelReference } from "./releaseLabelReference";
import { convertReleaseReference } from "./releaseReference";
import { convertReleaseTypeForReleaseNotification } from "./releaseTypeForReleaseNotification";
import { convertResourceGroup } from "./resourceGroup";
import { convertSynopsisWithTerritory } from "./synopsisWithTerritory";

export const convertRelease = (
  parties: Ern411.Party[],
  release: Ern383.Release,
  territory?: Ern383.ReleaseDetailsByTerritory,
): Ern411.Release => ({
  _attributes: release._attributes
    ? {
        languageAndScriptCode: release._attributes.languageAndScriptCode,
      }
    : undefined,
  releaseReference: convertReleaseReference(release.releaseReference),
  releaseType:
    release.releaseType || territory?.releaseType
      ? findUnique([
          ...(release.releaseType || []),
          ...(territory?.releaseType || []),
        ]).map((releaseType) =>
          convertReleaseTypeForReleaseNotification(releaseType),
        )
      : [
          {
            _attributes: {
              userDefinedValue: "Unknown",
            },
            value: Avs411.ReleaseTypeErn4.USER_DEFINED,
          },
        ],
  releaseId: convertReleaseId(release.releaseId[0]),
  displayTitleText: [convertDisplayTitleText(release.referenceTitle.titleText)],
  displayTitle: [convertDisplayTitleFromReferenceTitle(release.referenceTitle)],
  additionalTitle: undefined,
  displayArtistName: territory?.displayArtist
    ? territory.displayArtist
        .filter(
          (displayArtist): displayArtist is Required<Ern383.Artist> =>
            (displayArtist.partyName?.length || 0) > 0,
        )
        .map((displayArtist) =>
          displayArtist.partyName.map((partyName) =>
            convertDisplayArtistNameWithDefault(partyName.fullName),
          ),
        )
        .reduce((acc, current) => acc.concat(current), [])
    : [],
  displayArtist: territory?.displayArtist
    ? territory.displayArtist.map((displayArtist) =>
        convertDisplayArtistFromArtist(parties, displayArtist),
      )
    : [],
  releaseLabelReference: territory?.labelName
    ? territory.labelName.map((labelName) =>
        convertReleaseLabelReference(parties, labelName),
      )
    : [],
  administratingRecordCompany: undefined,
  pLine:
    release.pLine || territory?.pLine
      ? findUnique([...(release.pLine || []), ...(territory?.pLine || [])]).map(
          (pLine) => convertPLineWithDefault(pLine),
        )
      : undefined,
  cLine:
    release.cLine || territory?.cLine
      ? findUnique([...(release.cLine || []), ...(territory?.cLine || [])]).map(
          (cLine) => convertCLineWithDefault(cLine),
        )
      : undefined,
  courtesyLine: undefined,
  duration: release.duration,
  genre: territory?.genre
    ? territory.genre.map((genre) => convertGenreWithTerritory(genre))
    : [],
  releaseDate: territory?.releaseDate
    ? [convertEventDateWithDefault(territory.releaseDate)]
    : undefined,
  originalReleaseDate: territory?.originalReleaseDate
    ? [convertEventDateWithDefault(territory.originalReleaseDate)]
    : undefined,
  parentalWarningType: territory?.parentalWarningType
    ? territory.parentalWarningType.map((parentalWarningType) =>
        convertParentalWarningTypeWithTerritory(parentalWarningType),
      )
    : [],
  avRating: territory?.avRating
    ? territory?.avRating.map((avRating) => convertAvRating(avRating))
    : undefined,
  relatedRelease: territory?.relatedRelease
    ? territory.relatedRelease.map((relatedRelease) =>
        convertRelatedRelease(
          parties,
          relatedRelease,
          relatedRelease.releaseSummaryDetailsByTerritory?.shift(),
        ),
      )
    : undefined,
  isCompilation: undefined,
  isMultiArtistCompilation: territory?.isMultiArtistCompilation || undefined,
  resourceGroup: release.releaseResourceReferenceList
    ? convertResourceGroup(parties, release.releaseResourceReferenceList)
    : {},
  externalResourceLink: release.externalResourceLink
    ? release.externalResourceLink.map((externalResourceLink) =>
        convertExternalResourceLink(externalResourceLink),
      )
    : undefined,
  keywords: territory?.keywords
    ? territory?.keywords.map((keywords) => convertKeywords(keywords))
    : undefined,
  synopsis: territory?.synopsis
    ? [convertSynopsisWithTerritory(territory.synopsis)]
    : undefined,
  raga: undefined,
  tala: undefined,
  deity: undefined,
  hiResMusicDescription: undefined,
  isSoundtrack: undefined,
  isHiResMusic: undefined,
  marketingComment: territory?.marketingComment
    ? [convertMarketingComment(territory.marketingComment)]
    : undefined,
});
