import { Avs411 } from "../../../avs";

// <xs:complexType name="EventDateWithDefault">
//   <xs:simpleContent>
//     <xs:extension base="ern:ddex_IsoDate">
//       <xs:attribute name="IsApproximate" type="xs:boolean" />
//       <xs:attribute name="ApplicableTerritoryCode" type="avs:AllTerritoryCode" />
//       <xs:attribute name="IsDefault" type="xs:boolean" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type EventDateWithDefault = {
  _attributes?: {
    isApproximate?: boolean;
    applicableTerritoryCode?: Avs411.AllTerritoryCode;
    isDefault?: boolean;
  };

  value: Date;
};
