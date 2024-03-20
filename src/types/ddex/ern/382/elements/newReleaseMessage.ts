import { MessageHeader } from "../complexTypes";

// <xs:element name="NewReleaseMessage">
//   <xs:complexType>
//     <xs:sequence>
//         <xs:element name="MessageHeader" type="ern:MessageHeader" />
//         <xs:element name="UpdateIndicator" minOccurs="0" type="avs:UpdateIndicator" />
//         <xs:element name="IsBackfill" minOccurs="0" type="xs:boolean" />
//         <xs:element name="CatalogTransfer" minOccurs="0" type="ern:CatalogTransfer" />
//         <xs:element name="WorkList" minOccurs="0" type="ern:WorkList" />
//         <xs:element name="CueSheetList" minOccurs="0" type="ern:CueSheetList" />
//         <xs:element name="ResourceList" type="ern:ResourceList" />
//         <xs:element name="CollectionList" minOccurs="0" type="ern:CollectionList" />
//         <xs:element name="ReleaseList" type="ern:ReleaseList" />
//         <xs:element name="DealList" minOccurs="0" type="ern:DealList" />
//     </xs:sequence>
//     <xs:attribute name="MessageSchemaVersionId" type="xs:string" use="required" />
//     <xs:attribute name="BusinessProfileVersionId" type="xs:string" />
//     <xs:attribute name="ReleaseProfileVersionId" type="xs:string" />
//     <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
//   </xs:complexType>
// </xs:element>
export type NewReleaseMessage = {
  _attributes: {
    messageSchemaVersionId: string;
    businessProfileVersionId?: string;
    releaseProfileVersionId?: string;
    languageAndScriptCode?: string;
  };

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
