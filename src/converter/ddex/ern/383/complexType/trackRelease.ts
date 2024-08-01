import { Ern383, Ern411 } from "../../../../../types";

export const convertTrackRelease = (
  ern: Ern383.Release,
): Ern411.TrackRelease => ({
  _attributes:
    ern._attributes && ern._attributes.isMainRelease
      ? {
          isMainRelease: ern._attributes.isMainRelease,
        }
      : undefined,
  releaseReference: "R0" as Ern411.TrackRelease["releaseReference"],
  releaseId: ern.releaseId as Ern411.TrackRelease["releaseId"],
  // @todo <xs:element name="DisplayTitleText" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayTitleText" />
  // @todo <xs:element name="DisplayTitle" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayTitle" />
  // @todo <xs:element name="AdditionalTitle" minOccurs="0" maxOccurs="unbounded" type="ern:AdditionalTitle" />
  releaseResourceReference:
    ern.releaseResourceReferenceList?.releaseResourceReference.shift()
      ?.value as Ern411.TrackRelease["releaseResourceReference"],
  // @todo <xs:element name="LinkedReleaseResourceReference" minOccurs="0" maxOccurs="unbounded" type="ern:LinkedReleaseResourceReference" />
  releaseLabelReference: [],
  genre: [],
  // @todo <xs:element name="Keywords" minOccurs="0" maxOccurs="unbounded" type="ern:KeywordsWithTerritory" />
  // @todo <xs:element name="Synopsis" minOccurs="0" maxOccurs="unbounded" type="ern:SynopsisWithTerritory" />
  // @todo <xs:element name="MarketingComment" minOccurs="0" maxOccurs="unbounded" type="ern:MarketingComment" />
});
