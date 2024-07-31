import { Avs411 } from "../../../avs";

// <xs:complexType name="Raga">
//   <xs:simpleContent>
//     <xs:extension base="xs:string">
//       <xs:attribute name="ApplicableTerritoryCode" type="avs:CurrentTerritoryCode" />
//       <xs:attribute name="IsDefault" type="xs:boolean" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type Raga = {
  _attributes?: {
    applicableTerritoryCode?: Avs411.CurrentTerritoryCode;
    isDefault?: boolean;
  };

  value: string;
};
