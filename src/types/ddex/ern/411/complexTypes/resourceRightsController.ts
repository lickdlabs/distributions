import { Avs411 } from "../../../avs";
import { PartyReference } from "../references";
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

  rightsControllerPartyReference: PartyReference;
  rightsControllerRole?: Avs411.RightsControllerRole[];
  delegatedUsageRights: DelegatedUsageRights[];
};
