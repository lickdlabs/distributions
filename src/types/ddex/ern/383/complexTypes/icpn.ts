// <xs:complexType name="ICPN">
//   <xs:simpleContent>
//     <xs:extension base="xs:string">
//       <xs:attribute name="IsEan" type="xs:boolean" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type Icpn = {
  _attributes?: {
    isEan?: boolean;
  };

  value: string;
};
