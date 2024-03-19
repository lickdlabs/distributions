import { MessageHeader } from "../complexTypes";

export type NewReleaseMessage = {
  _attributes: {
    messageSchemaVersionId: string;
    businessProfileVersionId?: string;
    releaseProfileVersionId?: string;
    languageAndScriptCode?: string;
  };

  messageHeader: MessageHeader;
  // <xs:element name="UpdateIndicator" minOccurs="0" type="avs:UpdateIndicator" />
  // <xs:element name="IsBackfill" minOccurs="0" type="xs:boolean" />
  // <xs:element name="CatalogTransfer" minOccurs="0" type="ern:CatalogTransfer" />
  // <xs:element name="WorkList" minOccurs="0" type="ern:WorkList" />
  // <xs:element name="CueSheetList" minOccurs="0" type="ern:CueSheetList" />
  // <xs:element name="ResourceList" type="ern:ResourceList" />
  // <xs:element name="CollectionList" minOccurs="0" type="ern:CollectionList" />
  // <xs:element name="ReleaseList" type="ern:ReleaseList" />
  // <xs:element name="DealList" minOccurs="0" type="ern:DealList" />
};
