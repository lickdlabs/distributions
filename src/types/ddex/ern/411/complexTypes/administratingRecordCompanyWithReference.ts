import { PartyReference } from "../references";
import { AdministratingRecordCompanyRole } from "./administratingRecordCompanyRole";

// <xs:complexType name="AdministratingRecordCompanyWithReference">
//   <xs:sequence>
//     <xs:element name="RecordCompanyPartyReference">
//       <xs:simpleType>
//         <xs:restriction base="xs:IDREF">
//           <xs:pattern value="P[\d\-_a-zA-Z]+" />
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:element>
//     <xs:element name="Role" type="ern:AdministratingRecordCompanyRole" />
//   </xs:sequence>
// </xs:complexType>
export type AdministratingRecordCompanyWithReference = {
  recordCompanyPartyReference: PartyReference;
  role: AdministratingRecordCompanyRole;
};
