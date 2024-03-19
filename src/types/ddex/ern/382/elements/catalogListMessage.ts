import { MessageHeader } from "../complexTypes";

export type CatalogListMessage = {
  _attributes: {
    messageSchemaVersionId: string;
    businessProfileVersionId?: string;
    releaseProfileVersionId?: string;
    languageAndScriptCode?: string;
  };

  messageHeader: MessageHeader;
  // <xs:element name="PublicationDate" type="xs:dateTime" />
  // <xs:element name="CatalogItem" maxOccurs="unbounded" type="ern:CatalogItem" />
};
