import { Ern382 } from "../../../../../types";
import { parseReferenceTitle } from "./referenceTitle";
import { parseReleaseId } from "./releaseId";
import { parseRightsAgreementId } from "./rightsAgreementId";

export const parseRelatedRelease = (object: any): Ern382.RelatedRelease => {
  const attributes = {
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    releaseId: object.ReleaseId.map((releaseId: any) =>
      parseReleaseId(releaseId),
    ),
    referenceTitle: object.ReferenceTitle
      ? parseReferenceTitle(object.ReferenceTitle[0])
      : undefined,
    // @todo <xs:element name="ReleaseSummaryDetailsByTerritory" minOccurs="0" maxOccurs="unbounded" type="ern:ReleaseSummaryDetailsByTerritory" />
    rightsAgreementId: object.RightsAgreementId
      ? parseRightsAgreementId(object.RightsAgreementId[0])
      : undefined,
    // @todo <xs:element name="ReleaseRelationshipType" type="ern:ReleaseRelationshipType" />
    // @todo <xs:element name="ReleaseDate" minOccurs="0" type="ern:EventDate" />
    // @todo <xs:element name="OriginalReleaseDate" minOccurs="0" type="ern:EventDate" />
  };
};
