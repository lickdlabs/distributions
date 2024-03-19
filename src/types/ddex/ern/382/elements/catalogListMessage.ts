import { MessageHeader } from "../complexTypes";

// <xs:element name="CatalogListMessage">
export type CatalogListMessage = {
  _attributes: {
    // <xs:attribute name="MessageSchemaVersionId" type="xs:string" use="required" />
    messageSchemaVersionId: string;

    // <xs:attribute name="BusinessProfileVersionId" type="xs:string" />
    businessProfileVersionId?: string;

    // <xs:attribute name="ReleaseProfileVersionId" type="xs:string" />
    releaseProfileVersionId?: string;

    // <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
    languageAndScriptCode?: string;
  };

  // <xs:element name="MessageHeader" type="ern:MessageHeader" />
  messageHeader: MessageHeader;

  // @todo <xs:element name="PublicationDate" type="xs:dateTime" />

  // @todo <xs:element name="CatalogItem" maxOccurs="unbounded" type="ern:CatalogItem" />
};
