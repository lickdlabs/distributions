import { Avs20200108 } from "../../../avs";

// <xs:complexType name="PLine">
//   <xs:sequence>
//     <xs:element name="Year" minOccurs="0" type="xs:gYear" />
//     <xs:element name="PLineCompany" minOccurs="0" type="xs:string" />
//     <xs:element name="PLineText" type="xs:string" />
//   </xs:sequence>
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
//   <xs:attribute name="PLineType" type="avs:PLineType" />
// </xs:complexType>
export type PLine = {
  _attributes?: {
    languageAndScriptCode?: string;
    pLineType?: Avs20200108.PLineType;
  };

  year?: string;
  pLineCompany?: string;
  pLineText: string;
};
