import { Avs20200108 } from "../../../avs";

// <xs:complexType name="LabelName">
//   <xs:simpleContent>
//     <xs:extension base="xs:string">
//       <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
//       <xs:attribute name="LabelNameType" type="avs:LabelNameType" />
//       <xs:attribute name="Namespace" type="xs:string" />
//       <xs:attribute name="UserDefinedValue" type="xs:string" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type LabelName = {
  _attributes?: {
    languageAndScriptCode?: string;
    labelNameType?: Avs20200108.LabelNameType;
    namespace?: string;
    userDefinedValue?: string;
  };

  value: string;
};
