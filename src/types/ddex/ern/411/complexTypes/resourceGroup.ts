// <xs:complexType name="ResourceGroup">
//   <xs:sequence>
//     <xs:element name="DisplayTitleText" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayTitleText" />
//     <xs:element name="DisplayTitle" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayTitle" />
//     <xs:element name="AdditionalTitle" minOccurs="0" maxOccurs="unbounded" type="ern:AdditionalTitle" />
//     <xs:element name="SequenceNumber" minOccurs="0" type="xs:integer" />
//     <xs:choice minOccurs="0">
//       <xs:element name="NoDisplaySequence" type="xs:boolean" />
//       <xs:element name="DisplaySequence" type="xs:string" />
//     </xs:choice>
//     <xs:element name="DisplayArtist" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayArtist" />
//     <xs:element name="CarrierType" minOccurs="0" maxOccurs="unbounded" type="ern:CarrierType" />
//     <xs:element name="Duration" minOccurs="0" type="xs:duration" />
//     <xs:choice minOccurs="0">
//       <xs:element name="ResourceGroupReleaseReference">
//         <xs:simpleType>
//           <xs:restriction base="xs:IDREF">
//             <xs:pattern value="R[\d\-_a-zA-Z]+" />
//           </xs:restriction>
//         </xs:simpleType>
//       </xs:element>
//       <xs:element name="ReleaseId" type="ern:ReleaseId" />
//     </xs:choice>
//     <xs:element name="ResourceGroup" minOccurs="0" maxOccurs="unbounded" type="ern:ResourceSubGroup" />
//     <xs:element name="ResourceGroupContentItem" minOccurs="0" maxOccurs="unbounded" type="ern:ResourceGroupContentItem" />
//     <xs:element name="LinkedReleaseResourceReference" minOccurs="0" maxOccurs="unbounded" type="ern:LinkedReleaseResourceReference" />
//   </xs:sequence>
// </xs:complexType>
export type ResourceGroup = {
  // @todo <xs:element name="DisplayTitleText" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayTitleText" />
  // @todo <xs:element name="DisplayTitle" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayTitle" />
  // @todo <xs:element name="AdditionalTitle" minOccurs="0" maxOccurs="unbounded" type="ern:AdditionalTitle" />
  // @todo <xs:element name="SequenceNumber" minOccurs="0" type="xs:integer" />
  // @todo <xs:choice minOccurs="0">
  //   <xs:element name="NoDisplaySequence" type="xs:boolean" />
  //   <xs:element name="DisplaySequence" type="xs:string" />
  // </xs:choice>
  // @todo <xs:element name="DisplayArtist" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayArtist" />
  // @todo <xs:element name="CarrierType" minOccurs="0" maxOccurs="unbounded" type="ern:CarrierType" />
  // @todo <xs:element name="Duration" minOccurs="0" type="xs:duration" />
  // @todo <xs:choice minOccurs="0">
  //   <xs:element name="ResourceGroupReleaseReference">
  //     <xs:simpleType>
  //       <xs:restriction base="xs:IDREF">
  //         <xs:pattern value="R[\d\-_a-zA-Z]+" />
  //       </xs:restriction>
  //     </xs:simpleType>
  //   </xs:element>
  //   <xs:element name="ReleaseId" type="ern:ReleaseId" />
  // </xs:choice>
  // @todo <xs:element name="ResourceGroup" minOccurs="0" maxOccurs="unbounded" type="ern:ResourceSubGroup" />
  // @todo <xs:element name="ResourceGroupContentItem" minOccurs="0" maxOccurs="unbounded" type="ern:ResourceGroupContentItem" />
  // @todo <xs:element name="LinkedReleaseResourceReference" minOccurs="0" maxOccurs="unbounded" type="ern:LinkedReleaseResourceReference" />
};
