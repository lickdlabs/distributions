import { Avs20200108 } from "../../../avs";
import { TitleText } from "./titleText";
import { TypedSubTitle } from "./typedSubTitle";

// <xs:complexType name="Title">
//   <xs:sequence>
//     <xs:element name="TitleText" type="ern:TitleText" />
//     <xs:element name="SubTitle" minOccurs="0" maxOccurs="unbounded" type="ern:TypedSubTitle" />
//   </xs:sequence>
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
//   <xs:attribute name="TitleType" type="avs:TitleType" />
// </xs:complexType>
export type Title = {
  _attributes?: {
    languageAndScriptCode?: string;
    titleType?: Avs20200108.TitleType;
  };

  titleText: TitleText;
  subTitle?: TypedSubTitle[];
};
