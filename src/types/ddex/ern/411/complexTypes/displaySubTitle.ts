import { Avs411 } from "../../../avs";

// <xs:complexType name="DisplaySubTitle">
//   <xs:simpleContent>
//     <xs:extension base="xs:string">
//       <xs:attribute name="SequenceNumber" type="xs:integer" />
//       <xs:attribute name="IsDisplayedInTitle" type="xs:boolean" />
//       <xs:attribute name="SubTitleType" type="avs:SubTitleType" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type DisplaySubTitle = {
  _attributes?: {
    sequenceNumber?: number;
    isDisplayedInTitle?: boolean;
    subTitleType?: Avs411.SubTitleType;
  };

  value: string;
};
