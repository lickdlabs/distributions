import { Release } from "./release";

// <xs:complexType name="ReleaseList">
//   <xs:sequence>
//     <xs:element name="Release" minOccurs="0" maxOccurs="unbounded" type="ern:Release" />
//   </xs:sequence>
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
// </xs:complexType>
export type ReleaseList = {
  _attributes?: {
    languageAndScriptCode?: string;
  };

  release?: Release[];
};
