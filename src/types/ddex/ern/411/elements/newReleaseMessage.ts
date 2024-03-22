import { Avs411 } from "../../../avs";
import { MessageHeader, ResourceList } from "../complexTypes";

// <xs:element name="NewReleaseMessage">
//   <xs:complexType>
//     <xs:sequence>
//       <xs:element name="MessageHeader" type="ern:MessageHeader" />
//       <xs:element name="PartyList" type="ern:PartyList" />
//       <xs:element name="CueSheetList" minOccurs="0" type="ern:DetailedCueSheetList" />
//       <xs:element name="ResourceList" type="ern:ResourceList" />
//       <xs:element name="ChapterList" minOccurs="0" type="ern:ChapterList" />
//       <xs:element name="ReleaseList" type="ern:ReleaseList" />
//       <xs:element name="DealList" minOccurs="0" type="ern:DealList" />
//       <xs:element name="SupplementalDocumentList" minOccurs="0" type="ern:SupplementalDocumentList" />
//     </xs:sequence>
//     <xs:attribute name="ReleaseProfileVersionId" type="avs:ReleaseProfileVersionId" />
//     <xs:attribute name="ReleaseProfileVariantVersionId" type="avs:ReleaseProfileVariantVersionId" />
//     <xs:attribute name="LanguageAndScriptCode" type="xs:string" use="required" />
//   </xs:complexType>
// </xs:element>
export type NewReleaseMessage = {
  _attributes: {
    releaseProfileVersionId?: Avs411.ReleaseProfileVersionId;
    releaseProfileVariantVersionId?: Avs411.ReleaseProfileVariantVersionId;
    languageAndScriptCode: string;
  };

  messageHeader: MessageHeader;
  // @todo <xs:element name="PartyList" type="ern:PartyList" />
  // @todo <xs:element name="CueSheetList" minOccurs="0" type="ern:DetailedCueSheetList" />
  resourceList: ResourceList;
  // @todo <xs:element name="ChapterList" minOccurs="0" type="ern:ChapterList" />
  // @todo <xs:element name="ReleaseList" type="ern:ReleaseList" />
  // @todo <xs:element name="DealList" minOccurs="0" type="ern:DealList" />
  // @todo <xs:element name="SupplementalDocumentList" minOccurs="0" type="ern:SupplementalDocumentList" />
};
