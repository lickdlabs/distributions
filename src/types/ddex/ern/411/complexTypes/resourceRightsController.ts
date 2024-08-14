import { Avs411 } from "../../../avs";
import { DelegatedUsageRights } from "./delegatedUsageRights";
import { RightShareChoice } from "./rightShareChoice";

// <xs:complexType name="ResourceRightsController">
//   <xs:sequence>
//     <xs:element name="RightsControllerPartyReference">
//       <xs:simpleType>
//         <xs:restriction base="xs:IDREF">
//           <xs:pattern value="P[\d\-_a-zA-Z]+" />
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:element>
//     <xs:element name="RightsControllerRole" minOccurs="0" maxOccurs="unbounded" type="avs:RightsControllerRole" />
//     <xs:choice minOccurs="0">
//       <xs:element name="RightShareUnknown" type="xs:boolean" />
//       <xs:element name="RightSharePercentage" type="ern:Percentage" />
//     </xs:choice>
//     <xs:element name="DelegatedUsageRights" maxOccurs="unbounded" type="ern:DelegatedUsageRights" />
//   </xs:sequence>
//   <xs:attribute name="SequenceNumber" type="xs:integer" />
// </xs:complexType>
export type ResourceRightsController = Partial<RightShareChoice> & {
  _attributes?: {
    sequenceNumber?: number;
  };

  rightsControllerPartyReference: `${string & {
    __brand: "P[\\d\\-_a-zA-Z]+";
  }}`;
  rightsControllerRole?: Avs411.RightsControllerRole[];
  delegatedUsageRights: DelegatedUsageRights[];
};
