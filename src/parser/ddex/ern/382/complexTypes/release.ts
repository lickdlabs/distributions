import { Ern382 } from "../../../../../types";
import { parseDuration } from "../../utils";
import { parseCLine } from "./cLine";
import { parseEventDate } from "./eventDate";
import { parseExternalResourceLink } from "./externalResourceLink";
import { parsePLine } from "./pLine";
import { parseReferenceTitle } from "./referenceTitle";
import { parseReleaseCollectionReferenceList } from "./releaseCollectionReferenceList";
import { parseReleaseDetailsByTerritory } from "./releaseDetailsByTerritory";
import { parseReleaseId } from "./releaseId";
import { parseReleaseResourceReferenceList } from "./releaseResourceReferenceList";
import { parseReleaseType } from "./releaseType";
import { parseResourceOmissionReason } from "./resourceOmissionReason";
import { parseRightsAgreementId } from "./rightsAgreementId";
import { parseSalesReportingProxyReleaseId } from "./salesReportingProxyReleaseId";
import { parseWebPage } from "./webPage";

export const parseRelease = (object: any): Ern382.Release => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
        isMainRelease: object.$.IsMainRelease
          ? object.$.IsMainRelease === "true"
          : undefined,
      }
    : undefined,
  releaseId: object.ReleaseId.map((releaseId: any) =>
    parseReleaseId(releaseId),
  ),
  releaseReference: object.ReleaseReference
    ? object.ReleaseReference.map(
        (releaseReference: string) => releaseReference,
      )
    : undefined,
  externalResourceLink: object.ExternalResourceLink
    ? object.ExternalResourceLink.map((externalResourceLink: any) =>
        parseExternalResourceLink(externalResourceLink),
      )
    : undefined,
  salesReportingProxyReleaseId: object.SalesReportingProxyReleaseId
    ? object.SalesReportingProxyReleaseId.map(
        (salesReportingProxyReleaseId: any) =>
          parseSalesReportingProxyReleaseId(salesReportingProxyReleaseId),
      )
    : undefined,
  referenceTitle: parseReferenceTitle(object.ReferenceTitle[0]),
  ...parseReleaseChoice(object),
  releaseCollectionReferenceList: object.ReleaseCollectionReferenceList
    ? parseReleaseCollectionReferenceList(
        object.ReleaseCollectionReferenceList[0],
      )
    : undefined,
  releaseType: object.ReleaseType
    ? object.ReleaseType.map((releaseType: any) =>
        parseReleaseType(releaseType),
      )
    : undefined,
  releaseDetailsByTerritory: object.ReleaseDetailsByTerritory.map(
    (releaseDetailsByTerritory: any) =>
      parseReleaseDetailsByTerritory(releaseDetailsByTerritory),
  ),
  languageOfPerformance: object.LanguageOfPerformance
    ? object.LanguageOfPerformance.map(
        (languageOfPerformance: string) => languageOfPerformance,
      )
    : undefined,
  languageOfDubbing: object.LanguageOfDubbing
    ? object.LanguageOfDubbing.map(
        (languageOfDubbing: string) => languageOfDubbing,
      )
    : undefined,
  subTitleLanguage: object.SubTitleLanguage
    ? object.SubTitleLanguage.map(
        (subTitleLanguage: string) => subTitleLanguage,
      )
    : undefined,
  duration: object.Duration ? parseDuration(object.Duration[0]) : undefined,
  rightsAgreementId: object.RightsAgreementId
    ? parseRightsAgreementId(object.RightsAgreementId[0])
    : undefined,
  pLine: object.PLine
    ? object.PLine.map((pLine: any) => parsePLine(pLine))
    : undefined,
  cLine: object.CLine
    ? object.CLine.map((cLine: any) => parseCLine(cLine))
    : undefined,
  artistProfilePage: object.ArtistProfilePage
    ? object.ArtistProfilePage.map((artistProfilePage: any) =>
        parseWebPage(artistProfilePage),
      )
    : undefined,
  globalReleaseDate: object.GlobalReleaseDate
    ? parseEventDate(object.GlobalReleaseDate)
    : undefined,
  globalOriginalReleaseDate: object.GlobalOriginalReleaseDate
    ? parseEventDate(object.GlobalOriginalReleaseDate)
    : undefined,
});

const parseReleaseChoice = (object: any): Ern382.ReleaseChoice => {
  if (object.ReleaseResourceReferenceList) {
    return {
      releaseResourceReferenceList: parseReleaseResourceReferenceList(
        object.ReleaseResourceReferenceList[0],
      ),
    };
  }

  return {
    resourceOmissionReason: parseResourceOmissionReason(
      object.ResourceOmissionReason[0],
    ),
  };
};
