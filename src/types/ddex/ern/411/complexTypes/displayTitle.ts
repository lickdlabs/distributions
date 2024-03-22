import { Avs411 } from "../../../avs";
import { DisplaySubTitle } from "./displaySubTitle";

// <xs:complexType name="DisplayTitle">
//   <xs:sequence>
//     <xs:element name="TitleText" type="xs:string" />
//     <xs:element name="SubTitle" minOccurs="0" maxOccurs="unbounded" type="ern:DisplaySubTitle" />
//   </xs:sequence>
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
//   <xs:attribute name="ApplicableTerritoryCode" type="avs:CurrentTerritoryCode" />
//   <xs:attribute name="IsDefault" type="xs:boolean" />
// </xs:complexType>
export type DisplayTitle = {
  _attributes?: {
    languageAndScriptCode?: string;
    applicableTerritoryCode?: Avs411.CurrentTerritoryCode;
    isDefault?: boolean;
  };

  titleText: string;
  subTitle?: DisplaySubTitle[];
};
