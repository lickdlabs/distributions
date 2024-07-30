import { Avs20161006 } from "../../../avs";
import { PartyChoice } from "./partyChoice";

// <xs:complexType name="AdministratingRecordCompany">
//   <xs:choice>
//     <xs:element name="PartyId" maxOccurs="unbounded" type="ern:PartyId" />
//     <xs:sequence>
//       <xs:element name="PartyName" maxOccurs="unbounded" type="ern:PartyName" />
//       <xs:element name="PartyId" minOccurs="0" maxOccurs="unbounded" type="ern:PartyId" />
//     </xs:sequence>
//   </xs:choice>
//   <xs:attribute name="Namespace" type="xs:string" />
//   <xs:attribute name="UserDefinedValue" type="xs:string" />
//   <xs:attribute name="Role" type="avs:AdministratingRecordCompanyRole" use="required" />
// </xs:complexType>
export type AdministratingRecordCompany = PartyChoice & {
  _attributes?: {
    namespace?: string;
    userDefinedValue?: string;
    role?: Avs20161006.AdministratingRecordCompanyRole;
  };
};
