import { ContributorRole } from "./contributorRole";
import { DisplayArtistRole } from "./displayArtistRole";
import { TitleDisplayInformation } from "./titleDisplayInformation";

// <xs:complexType name="DisplayArtist">
//   <xs:sequence>
//     <xs:element name="ArtistPartyReference">
//       <xs:simpleType>
//         <xs:restriction base="xs:IDREF">
//           <xs:pattern value="P[\d\-_a-zA-Z]+" />
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:element>
//     <xs:element name="DisplayArtistRole" type="ern:DisplayArtistRole" />
//     <xs:element name="ArtisticRole" minOccurs="0" maxOccurs="unbounded" type="ern:ContributorRole" />
//     <xs:element name="TitleDisplayInformation" minOccurs="0" maxOccurs="unbounded" type="ern:TitleDisplayInformation" />
//   </xs:sequence>
//   <xs:attribute name="SequenceNumber" type="xs:integer" />
// </xs:complexType>
export type DisplayArtist = {
  _attributes?: {
    sequenceNumber?: number;
  };

  artistPartyReference: `${string & { __brand: "P[\\d-_a-zA-Z]+" }}`;
  displayArtistRole: DisplayArtistRole;
  artisticRole?: ContributorRole[];
  titleDisplayInformation?: TitleDisplayInformation[];
};
