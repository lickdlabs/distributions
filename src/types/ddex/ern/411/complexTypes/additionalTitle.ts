import { Avs411 } from "../../../avs";
import { DisplaySubTitle } from "./displaySubTitle";

// <xs:complexType name="AdditionalTitle">
//   <xs:sequence>
//     <xs:element name="TitleText" type="xs:string" />
//     <xs:element name="SubTitle" minOccurs="0" maxOccurs="unbounded" type="ern:DisplaySubTitle" />
//   </xs:sequence>
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
//   <xs:attribute name="ApplicableTerritoryCode" type="avs:CurrentTerritoryCode" />
//   <xs:attribute name="TitleType" type="avs:AdditionalTitleType" />
//   <xs:attribute name="Namespace" type="xs:string" />
//   <xs:attribute name="UserDefinedValue" type="xs:string" />
//   <xs:attribute name="IsDefault" type="xs:boolean" />
// </xs:complexType>
export type AdditionalTitle = {
  _attributes?: {
    languageAndScriptCode?: string;
    applicableTerritoryCode?: Avs411.CurrentTerritoryCode;
    titleType?: Avs411.AdditionalTitleType;
    namespace?: string;
    userDefinedValue?: string;
    isDefault?: boolean;
  };

  titleText: string;
  subTitle?: DisplaySubTitle[];
};
