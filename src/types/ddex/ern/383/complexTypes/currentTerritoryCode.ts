import { Avs20200108 } from "../../../avs";

// <xs:complexType name="CurrentTerritoryCode">
//   <xs:simpleContent>
//     <xs:extension base="avs:CurrentTerritoryCode">
//       <xs:attribute name="IdentifierType" type="avs:TerritoryCodeType" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type CurrentTerritoryCode = {
  _attributes?: {
    identifierType?: Avs20200108.TerritoryCodeType;
  };

  value: Avs20200108.CurrentTerritoryCode;
};
