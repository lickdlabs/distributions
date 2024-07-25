import { Release } from "./release";
import { TrackRelease } from "./trackRelease";

// <xs:complexType name="ReleaseList">
//   <xs:sequence>
//     <xs:element name="Release" minOccurs="0" type="ern:Release" />
//     <xs:element name="TrackRelease" minOccurs="0" maxOccurs="unbounded" type="ern:TrackRelease" />
//   </xs:sequence>
// </xs:complexType>
export type ReleaseList = {
  release?: Release;
  trackRelease?: TrackRelease[];
};
