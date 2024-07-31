import { Avs411 } from "../../../avs";

// <xs:complexType name="AdministratingRecordCompanyRole">
//   <xs:simpleContent>
//     <xs:extension base="avs:AdministratingRecordCompanyRole">
//       <xs:attribute name="Namespace" type="xs:string" />
//       <xs:attribute name="UserDefinedValue" type="xs:string" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type AdministratingRecordCompanyRole = {
  _attributes?: {
    namespace?: string;
    userDefinedValue?: string;
  };

  value: Avs411.AdministratingRecordCompanyRole;
};
