import { Avs411 } from "../../../avs";

// <xs:complexType name="PartyRelationshipType">
//   <xs:simpleContent>
//     <xs:extension base="avs:PartyRelationshipType">
//       <xs:attribute name="Namespace" type="xs:string" />
//       <xs:attribute name="UserDefinedValue" type="xs:string" />
//       <xs:attribute name="MayBeShared" type="xs:boolean" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type PartyRelationshipType = {
  _attributes?: {
    namespace?: string;
    userDefinedValue?: string;
    mayBeShared?: boolean;
  };

  value: Avs411.PartyRelationshipType;
};
