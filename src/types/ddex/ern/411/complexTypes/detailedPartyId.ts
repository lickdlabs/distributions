import { ProprietaryId } from "./proprietaryId";

// <xs:complexType name="DetailedPartyId">
//   <xs:sequence>
//     <xs:element name="ISNI" minOccurs="0" type="xs:string" />
//     <xs:element name="DPID" minOccurs="0">
//       <xs:simpleType>
//         <xs:restriction base="xs:string">
//           <xs:pattern value="PADPIDA[a-zA-Z0-9]+" />
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:element>
//     <xs:element name="IpiNameNumber" minOccurs="0">
//       <xs:simpleType>
//         <xs:restriction base="xs:string">
//           <xs:pattern value="[0-9]{11}" />
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:element>
//     <xs:element name="IPN" minOccurs="0" type="xs:string" />
//     <xs:element name="CisacSocietyId" minOccurs="0" type="xs:string" />
//     <xs:element name="ProprietaryId" minOccurs="0" maxOccurs="unbounded" type="ern:ProprietaryId" />
//   </xs:sequence>
// </xs:complexType>
export type DetailedPartyId = {
  isni?: string;
  dpid?: `${string & { __brand: "PADPIDA[a-zA-Z0-9]+" }}`;
  ipiNameNumber?: `${string & { __brand: "[0-9]{11}" }}`;
  ipn?: string;
  cisacSocietyId?: string;
  proprietaryId?: ProprietaryId[];
};
