import { Avs411 } from "../../../avs";
import { MessageHeader } from "../complexTypes";

export type NewReleaseMessage = {
  _attributes: {
    releaseProfileVersionId?: Avs411.ReleaseProfileVersionId;
    releaseProfileVariantVersionId?: Avs411.ReleaseProfileVariantVersionId;
    languageAndScriptCode: string;
  };

  messageHeader: MessageHeader;
  // <xs:element name="PartyList" type="ern:PartyList" />
  // <xs:element name="CueSheetList" minOccurs="0" type="ern:DetailedCueSheetList" />
  // <xs:element name="ResourceList" type="ern:ResourceList" />
  // <xs:element name="ChapterList" minOccurs="0" type="ern:ChapterList" />
  // <xs:element name="ReleaseList" type="ern:ReleaseList" />
  // <xs:element name="DealList" minOccurs="0" type="ern:DealList" />
  // <xs:element name="SupplementalDocumentList" minOccurs="0" type="ern:SupplementalDocumentList" />
};
