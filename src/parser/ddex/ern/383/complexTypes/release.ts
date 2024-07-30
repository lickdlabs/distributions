import { Ern383 } from "../../../../../types";
import { convertDurationToMilliseconds } from "../../../../../utils";
import { parseCLine } from "./cLine";
import { parseEventDate } from "./eventDate";
import { parsePLine } from "./pLine";
import { parseReferenceTitle } from "./referenceTitle";
import { parseReleaseDetailsByTerritory } from "./releaseDetailsByTerritory";
import { parseReleaseId } from "./releaseId";
import { parseReleaseResourceReferenceList } from "./releaseResourceReferenceList";
import { parseReleaseType } from "./releaseType";
import { parseResourceOmissionReason } from "./resourceOmissionReason";
import { parseRightsAgreementId } from "./rightsAgreementId";

export const parseRelease = (object: any): Ern383.Release => {
  const attributes = {
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
    isMainRelease: object.$?.IsMainRelease
      ? object.$.IsMainRelease === "true"
      : undefined,
  };

  const parsed: Omit<
    Ern383.Release,
    "releaseResourceReferenceList" | "resourceOmissionReason"
  > = {
    _attributes: object.$ ? attributes : undefined,
    releaseId: object.ReleaseId.map((releaseId: any) =>
      parseReleaseId(releaseId),
    ),
    releaseReference: object.ReleaseReference
      ? object.ReleaseReference.map(
          (releaseReference: string) => releaseReference,
        )
      : undefined,
    // @todo <xs:element name="ExternalResourceLink" minOccurs="0" maxOccurs="unbounded" type="ern:ExternalResourceLink" />
    // @todo <xs:element name="SalesReportingProxyReleaseId" minOccurs="0" maxOccurs="unbounded" type="ern:SalesReportingProxyReleaseId" />
    referenceTitle: parseReferenceTitle(object.ReferenceTitle[0]),
    // @todo <xs:element name="ReleaseCollectionReferenceList" minOccurs="0" type="ern:ReleaseCollectionReferenceList" />
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
    duration: object.Duration
      ? convertDurationToMilliseconds(object.Duration[0])
      : undefined,
    rightsAgreementId: object.RightsAgreementId
      ? parseRightsAgreementId(object.RightsAgreementId[0])
      : undefined,
    pLine: object.PLine
      ? object.PLine.map((pLine: any) => parsePLine(pLine))
      : undefined,
    cLine: object.CLine
      ? object.CLine.map((cLine: any) => parseCLine(cLine))
      : undefined,
    // @todo <xs:element name="ArtistProfilePage" minOccurs="0" maxOccurs="unbounded" type="ern:WebPage" />
    globalReleaseDate: object.GlobalReleaseDate
      ? parseEventDate(object.GlobalReleaseDate)
      : undefined,
    globalOriginalReleaseDate: object.GlobalOriginalReleaseDate
      ? parseEventDate(object.GlobalOriginalReleaseDate)
      : undefined,
  };

  if (object.ReleaseResourceReferenceList) {
    return {
      ...parsed,
      releaseResourceReferenceList: parseReleaseResourceReferenceList(
        object.ReleaseResourceReferenceList[0],
      ),
    };
  }

  return {
    ...parsed,
    resourceOmissionReason: parseResourceOmissionReason(
      object.ResourceOmissionReason[0],
    ),
  };
};
