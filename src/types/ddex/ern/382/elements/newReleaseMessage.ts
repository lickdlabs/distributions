import { MessageHeader } from "../complexTypes";

// <xs:element name="NewReleaseMessage">
export type NewReleaseMessage = {
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

  // @todo <xs:element name="UpdateIndicator" minOccurs="0" type="avs:UpdateIndicator" />

  // @todo <xs:element name="IsBackfill" minOccurs="0" type="xs:boolean" />

  // @todo <xs:element name="CatalogTransfer" minOccurs="0" type="ern:CatalogTransfer" />

  // @todo <xs:element name="WorkList" minOccurs="0" type="ern:WorkList" />

  // @todo <xs:element name="CueSheetList" minOccurs="0" type="ern:CueSheetList" />

  // @todo <xs:element name="ResourceList" type="ern:ResourceList" />

  // @todo <xs:element name="CollectionList" minOccurs="0" type="ern:CollectionList" />

  // @todo <xs:element name="ReleaseList" type="ern:ReleaseList" />

  // @todo <xs:element name="DealList" minOccurs="0" type="ern:DealList" />
};
