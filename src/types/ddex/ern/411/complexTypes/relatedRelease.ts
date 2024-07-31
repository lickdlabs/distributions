import { AdditionalTitle } from "./additionalTitle";
import { DisplayArtistNameWithDefault } from "./displayArtistNameWithDefault";
import { DisplayTitle } from "./displayTitle";
import { DisplayTitleText } from "./displayTitleText";
import { EventDateWithoutFlags } from "./eventDateWithoutFlags";
import { ReleaseId } from "./releaseId";
import { ReleaseLabelReference } from "./releaseLabelReference";
import { ReleaseRelationshipType } from "./releaseRelationshipType";

// <xs:complexType name="RelatedRelease">
//   <xs:sequence>
//     <xs:element name="ReleaseRelationshipType" type="ern:ReleaseRelationshipType" />
//     <xs:element name="ReleaseId" type="ern:ReleaseId" />
//     <xs:element name="DisplayTitleText" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayTitleText" />
//     <xs:element name="DisplayTitle" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayTitle" />
//     <xs:element name="AdditionalTitle" minOccurs="0" maxOccurs="unbounded" type="ern:AdditionalTitle" />
//     <xs:element name="DisplayArtistName" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayArtistNameWithDefault" />
//     <xs:element name="ReleaseLabelReference" minOccurs="0" maxOccurs="unbounded" type="ern:ReleaseLabelReference" />
//     <xs:element name="ReleaseDate" minOccurs="0" type="ern:EventDateWithoutFlags" />
//     <xs:element name="OriginalReleaseDate" minOccurs="0" type="ern:EventDateWithoutFlags" />
//   </xs:sequence>
// </xs:complexType>
export type RelatedRelease = {
  releaseRelationshipType: ReleaseRelationshipType;
  releaseId: ReleaseId;
  displayTitleText?: DisplayTitleText[];
  displayTitle?: DisplayTitle[];
  additionalTitle?: AdditionalTitle[];
  displayArtistName?: DisplayArtistNameWithDefault[];
  releaseLabelReference?: ReleaseLabelReference[];
  releaseDate?: EventDateWithoutFlags;
  originalReleaseDate?: EventDateWithoutFlags;
};
