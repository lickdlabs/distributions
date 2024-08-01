import { Ern383 } from "../../../../../types";
import { parseEventDate } from "./eventDate";
import { parseReferenceTitle } from "./referenceTitle";
import { parseReleaseId } from "./releaseId";
import { parseReleaseRelationshipType } from "./releaseRelationshipType";
import { parseReleaseSummaryDetailsByTerritory } from "./releaseSummaryDetailsByTerritory";
import { parseRightsAgreementId } from "./rightsAgreementId";

export const parseRelatedRelease = (object: any): Ern383.RelatedRelease => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  releaseId: object.ReleaseId.map((releaseId: any) =>
    parseReleaseId(releaseId),
  ),
  referenceTitle: object.ReferenceTitle
    ? parseReferenceTitle(object.ReferenceTitle[0])
    : undefined,
  releaseSummaryDetailsByTerritory: object.ReleaseSummaryDetailsByTerritory
    ? object.ReleaseSummaryDetailsByTerritory.map(
        (releaseSummaryDetailsByTerritory: any) =>
          parseReleaseSummaryDetailsByTerritory(
            releaseSummaryDetailsByTerritory,
          ),
      )
    : undefined,
  rightsAgreementId: object.RightsAgreementId
    ? parseRightsAgreementId(object.RightsAgreementId[0])
    : undefined,
  releaseRelationshipType: parseReleaseRelationshipType(
    object.ReleaseRelationshipType[0],
  ),
  releaseDate: object.ReleaseDate
    ? parseEventDate(object.ReleaseDate[0])
    : undefined,
  originalReleaseDate: object.OriginalReleaseDate
    ? parseEventDate(object.OriginalReleaseDate[0])
    : undefined,
});
