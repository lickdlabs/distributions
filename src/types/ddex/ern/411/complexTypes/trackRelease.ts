import { AdditionalTitle } from "./additionalTitle";
import { DisplayTitle } from "./displayTitle";
import { DisplayTitleText } from "./displayTitleText";
import { GenreWithTerritory } from "./genreWithTerritory";
import { KeywordsWithTerritory } from "./keywordsWithTerritory";
import { LinkedReleaseResourceReference } from "./linkedReleaseResourceReference";
import { MarketingComment } from "./marketingComment";
import { ReleaseId } from "./releaseId";
import { ReleaseLabelReference } from "./releaseLabelReference";
import { SynopsisWithTerritory } from "./synopsisWithTerritory";

// <xs:complexType name="TrackRelease">
//   <xs:sequence>
//     <xs:element name="ReleaseReference">
//       <xs:simpleType>
//         <xs:restriction base="xs:ID">
//           <xs:pattern value="R[\d\-_a-zA-Z]+" />
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:element>
//     <xs:element name="ReleaseId" type="ern:ReleaseId" />
//     <xs:element name="DisplayTitleText" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayTitleText" />
//     <xs:element name="DisplayTitle" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayTitle" />
//     <xs:element name="AdditionalTitle" minOccurs="0" maxOccurs="unbounded" type="ern:AdditionalTitle" />
//     <xs:element name="ReleaseResourceReference">
//     <xs:simpleType>
//       <xs:restriction base="xs:IDREF">
//         <xs:pattern value="A[\d\-_a-zA-Z]+" />
//       </xs:restriction>
//     </xs:simpleType>
//     </xs:element>
//     <xs:element name="LinkedReleaseResourceReference" minOccurs="0" maxOccurs="unbounded" type="ern:LinkedReleaseResourceReference" />
//     <xs:element name="ReleaseLabelReference" maxOccurs="unbounded" type="ern:ReleaseLabelReference" />
//     <xs:element name="Genre" maxOccurs="unbounded" type="ern:GenreWithTerritory" />
//     <xs:element name="Keywords" minOccurs="0" maxOccurs="unbounded" type="ern:KeywordsWithTerritory" />
//     <xs:element name="Synopsis" minOccurs="0" maxOccurs="unbounded" type="ern:SynopsisWithTerritory" />
//     <xs:element name="MarketingComment" minOccurs="0" maxOccurs="unbounded" type="ern:MarketingComment" />
//   </xs:sequence>
//   <xs:attribute name="IsMainRelease" type="xs:boolean" />
// </xs:complexType>
export type TrackRelease = {
  _attributes?: {
    isMainRelease?: boolean;
  };

  releaseReference: `${string & { __brand: "R[\\d\\-_a-zA-Z]+" }}`;
  releaseId: ReleaseId;
  displayTitleText?: DisplayTitleText[];
  displayTitle?: DisplayTitle[];
  additionalTitle?: AdditionalTitle[];
  releaseResourceReference: `${string & { __brand: "A[\\d\\-_a-zA-Z]+" }}`;
  linkedReleaseResourceReference?: LinkedReleaseResourceReference[];
  releaseLabelReference: ReleaseLabelReference[];
  genre: GenreWithTerritory[];
  keywords?: KeywordsWithTerritory[];
  synopsis?: SynopsisWithTerritory[];
  marketingComment?: MarketingComment[];
};
