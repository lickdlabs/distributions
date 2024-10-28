import { Avs411 } from "../../../avs";
import { ReleaseReference } from "../references";

// <xs:complexType name="FulfillmentDateWithTerritory">
//   <xs:sequence>
//     <xs:element name="FulfillmentDate" type="ern:ddex_IsoDate" />
//     <xs:element name="ResourceReleaseReference" minOccurs="0" maxOccurs="unbounded">
//       <xs:simpleType>
//         <xs:restriction base="xs:IDREF">
//           <xs:pattern value="R[\d\-_a-zA-Z]+" />
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:element>
//   </xs:sequence>
//   <xs:attribute name="ApplicableTerritoryCode" type="avs:CurrentTerritoryCode" />
//   <xs:attribute name="IsDefault" type="xs:boolean" />
// </xs:complexType>
export type FulfillmentDateWithTerritory = {
  _attributes?: {
    applicableTerritoryCode?: Avs411.CurrentTerritoryCode;
    isDefault?: boolean;
  };

  fulfillmentDate: Date;
  resourceReleaseReference?: ReleaseReference;
};
