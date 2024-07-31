import { Avs411 } from "../../../avs";
import { LocalResourceAnchorReference } from "./localResourceAnchorReference";

// <xs:complexType name="LinkedReleaseResourceReference">
//   <xs:simpleContent>
//     <xs:extension base="ern:ddex_LocalResourceAnchorReference">
//       <xs:attribute name="LinkDescription" type="avs:LinkDescription" />
//       <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
//       <xs:attribute name="Namespace" type="xs:string" />
//       <xs:attribute name="UserDefinedValue" type="xs:string" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type LinkedReleaseResourceReference = {
  _attributes?: {
    linkDescription?: Avs411.LinkDescription;
    languageAndScriptCode?: string;
    namespace?: string;
    userDefinedValue?: string;
  };

  value: LocalResourceAnchorReference;
};
