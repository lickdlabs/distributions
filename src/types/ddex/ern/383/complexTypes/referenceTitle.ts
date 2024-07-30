import { SubTitle } from "./subTitle";
import { TitleText } from "./titleText";

// <xs:complexType name="ReferenceTitle">
//   <xs:sequence>
//     <xs:element name="TitleText" type="ern:TitleText" />
//     <xs:element name="SubTitle" minOccurs="0" type="ern:SubTitle" />
//   </xs:sequence>
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
// </xs:complexType>
export type ReferenceTitle = {
  _attributes?: {
    languageAndScriptCode?: string;
  };

  titleText: TitleText;
  subTitle?: SubTitle;
};
