import { Description } from "./description";
import { RatingAgency } from "./ratingAgency";

// <xs:complexType name="AvRating">
//   <xs:sequence>
//     <xs:element name="RatingText" type="xs:string" />
//     <xs:element name="RatingAgency" type="ern:RatingAgency" />
//     <xs:element name="RatingSchemeDescription" minOccurs="0" maxOccurs="unbounded" type="ern:Description" />
//   </xs:sequence>
// </xs:complexType>
export type AvRating = {
  ratingText: string;
  ratingAgency: RatingAgency;
  ratingSchemeDescription?: Description[];
};
