import { Description } from "./description";

// <xs:complexType name="Genre">
//   <xs:sequence>
//     <xs:element name="GenreText" type="ern:Description" />
//     <xs:element name="SubGenre" minOccurs="0" type="ern:Description" />
//   </xs:sequence>
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
// </xs:complexType>
export type Genre = {
  _attributes?: {
    languageAndScriptCode?: string;
  };

  genreText: Description;
  subGenre?: Description;
};
