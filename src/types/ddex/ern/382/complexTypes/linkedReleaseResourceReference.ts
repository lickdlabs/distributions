import { LocalResourceAnchorReference } from "./localResourceAnchorReference";

// <xs:complexType name="LinkedReleaseResourceReference">
//   <xs:simpleContent>
//     <xs:extension base="ern:ddex_LocalResourceAnchorReference">
//       <xs:attribute name="LinkDescription" type="xs:string" />
//       <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type LinkedReleaseResourceReference = {
  _attributes?: {
    linkDescription?: string;
    languageAndScriptCode?: string;
  };

  value: LocalResourceAnchorReference;
};
