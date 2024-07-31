import { Avs411 } from "../../../avs";
import { RatingAgency } from "./ratingAgency";

// <xs:complexType name="AvRating">
//   <xs:sequence>
//     <xs:element name="Rating" type="xs:string" />
//     <xs:element name="Agency" type="ern:RatingAgency" />
//     <xs:element name="Reason" minOccurs="0" type="avs:RatingReason" />
//   </xs:sequence>
//   <xs:attribute name="ApplicableTerritoryCode" type="avs:CurrentTerritoryCode" />
//   <xs:attribute name="IsDefault" type="xs:boolean" />
// </xs:complexType>
export type AvRating = {
  _attributes?: {
    ApplicableTerritoryCode?: Avs411.CurrentTerritoryCode;
    IsDefault?: boolean;
  };

  rating: string;
  agency: RatingAgency;
  reason?: Avs411.RatingReason;
};
