import { ReleaseReference } from "./releaseReference";

// <xs:complexType name="FulfillmentDate">
//   <xs:sequence>
//     <xs:element name="FulfillmentDate" type="ern:ddex_IsoDate" />
//     <xs:element name="ResourceReleaseReference" minOccurs="0" maxOccurs="unbounded">
//       <xs:simpleType>
//         <xs:restriction base="xs:IDREF">
//           <xs:pattern value="R[\d\-_a-zA-Z]+" />
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:element>
//   </xs:sequence>
// </xs:complexType>
export type FulfillmentDate = {
  fulfillmentDate: Date;
  resourceReleaseReference: ReleaseReference;
};
