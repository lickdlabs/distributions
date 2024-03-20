import { MessageHeader } from "../complexTypes";

// <xs:element name="CatalogListMessage">
//   <xs:complexType>
//     <xs:sequence>
//         <xs:element name="MessageHeader" type="ern:MessageHeader" />
//         <xs:element name="PublicationDate" type="xs:dateTime" />
//         <xs:element name="CatalogItem" maxOccurs="unbounded" type="ern:CatalogItem" />
//     </xs:sequence>
//     <xs:attribute name="MessageSchemaVersionId" type="xs:string" use="required" />
//     <xs:attribute name="BusinessProfileVersionId" type="xs:string" />
//     <xs:attribute name="ReleaseProfileVersionId" type="xs:string" />
//     <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
//   </xs:complexType>
// </xs:element>
export type CatalogListMessage = {
  _attributes: {
    messageSchemaVersionId: string;
    businessProfileVersionId?: string;
    releaseProfileVersionId?: string;
    languageAndScriptCode?: string;
  };

  messageHeader: MessageHeader;
  // @todo <xs:element name="PublicationDate" type="xs:dateTime" />
  // @todo <xs:element name="CatalogItem" maxOccurs="unbounded" type="ern:CatalogItem" />
};
