// <xs:complexType name="ContactId">
//   <xs:sequence>
//     <xs:element name="EmailAddress" minOccurs="0" maxOccurs="unbounded" type="xs:string" />
//     <xs:element name="PhoneNumber" minOccurs="0" maxOccurs="unbounded" type="xs:string" />
//     <xs:element name="FaxNumber" minOccurs="0" maxOccurs="unbounded" type="xs:string" />
//   </xs:sequence>
// </xs:complexType>
export type ContactId = {
  emailAddress?: string[];
  phoneNumber?: string[];
  faxNumber?: string[];
};
