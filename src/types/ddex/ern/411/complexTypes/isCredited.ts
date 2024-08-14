// <xs:complexType name="IsCredited">
//   <xs:simpleContent>
//     <xs:extension base="xs:boolean">
//       <xs:attribute name="MayBeShared" type="xs:boolean" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type IsCredited = {
  _attributes?: {
    mayBeShared?: boolean;
  };

  value: boolean;
};
