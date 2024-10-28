import { Avs411 } from "../../../avs";
import { PartyReference } from "../references";
import { AllTerritoryCode } from "./allTerritoryCode";
import { RightShareChoice } from "./rightShareChoice";

// <xs:complexType name="WorkRightsController">
//   <xs:sequence>
//     <xs:element name="RightsControllerPartyReference">
//       <xs:simpleType>
//         <xs:restriction base="xs:IDREF">
//           <xs:pattern value="P[\d\-_a-zA-Z]+" />
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:element>
//     <xs:element name="RightsControllerRole" minOccurs="0" maxOccurs="unbounded" type="avs:RightsControllerRole" />
//     <xs:element name="RightsControllerType" minOccurs="0" type="avs:RightsControllerType" />
//     <xs:choice minOccurs="0">
//       <xs:element name="RightShareUnknown" type="xs:boolean" />
//       <xs:element name="RightSharePercentage" type="xs:decimal" />
//     </xs:choice>
//     <xs:element name="Territory" minOccurs="0" maxOccurs="unbounded" type="ern:AllTerritoryCode" />
//     <xs:element name="StartDate" minOccurs="0" type="ern:ddex_IsoDate" />
//     <xs:element name="EndDate" minOccurs="0" type="ern:ddex_IsoDate" />
//   </xs:sequence>
// </xs:complexType>
export type WorkRightsController = Partial<RightShareChoice> & {
  rightsControllerPartyReference: PartyReference;
  rightsControllerRole?: Avs411.RightsControllerRole[];
  rightsControllerType?: Avs411.RightsControllerType;
  territory?: AllTerritoryCode[];
  startDate?: Date;
  endDate?: Date;
};
