import { Avs20200108 } from "../../../avs";

// <xs:complexType name="AllTerritoryCode">
//   <xs:simpleContent>
//     <xs:extension base="avs:AllTerritoryCode">
//       <xs:attribute name="IdentifierType" type="avs:TerritoryCodeTypeIncludingDeprecatedCodes" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type AllTerritoryCode = {
  _attributes?: {
    identifierType?: Avs20200108.TerritoryCodeTypeIncludingDeprecatedCodes;
  };

  value: Avs20200108.AllTerritoryCode;
};
