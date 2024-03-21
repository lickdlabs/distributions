import { Avs411 } from "../../../avs";

// <xs:complexType name="ParentalWarningTypeWithTerritory">
//   <xs:simpleContent>
//     <xs:extension base="avs:ParentalWarningType">
//       <xs:attribute name="Namespace" type="xs:string" />
//       <xs:attribute name="ApplicableTerritoryCode" type="avs:CurrentTerritoryCode" />
//       <xs:attribute name="UserDefinedValue" type="xs:string" />
//       <xs:attribute name="IsDefault" type="xs:boolean" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type ParentalWarningTypeWithTerritory = {
  _attributes?: {
    namespace?: string;
    applicableTerritoryCode?: Avs411.CurrentTerritoryCode;
    userDefinedValue?: string;
    isDefault?: boolean;
  };

  value: Avs411.ParentalWarningType;
};
