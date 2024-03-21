import { Prefix } from "./prefix";

// <xs:complexType name="TitleDisplayInformation">
//   <xs:sequence>
//     <xs:element name="IsDisplayedInTitle" type="xs:boolean" />
//     <xs:element name="Prefix" minOccurs="0" maxOccurs="unbounded" type="ern:Prefix" />
//   </xs:sequence>
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
//   <xs:attribute name="SequenceNumber" type="xs:integer" />
// </xs:complexType>
export type TitleDisplayInformation = {
  _attributes?: {
    languageAndScriptCode?: string;
    sequenceNumber?: number;
  };

  isDisplayedInTitle: boolean;
  prefix?: Prefix[];
};
