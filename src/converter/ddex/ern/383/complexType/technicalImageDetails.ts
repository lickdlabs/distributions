import { Ern383, Ern411 } from "../../../../../types";
import { convertFile } from "./file";

export const convertTechnicalImageDetails = (
  ern: Ern383.TechnicalImageDetails,
): Ern411.TechnicalImageDetails => ({
  _attributes: ern._attributes
    ? {
        languageAndScriptCode: ern._attributes.languageAndScriptCode,
        applicableTerritoryCode: undefined,
        isDefault: undefined,
      }
    : undefined,
  technicalResourceDetailsReference: ern.technicalResourceDetailsReference,
  // @todo <xs:element name="ImageCodecType" minOccurs="0" type="ern:ImageCodecType" />
  // @todo <xs:element name="ImageHeight" minOccurs="0" type="ern:Extent" />
  // @todo <xs:element name="ImageWidth" minOccurs="0" type="ern:Extent" />
  // @todo <xs:element name="AspectRatio" minOccurs="0" type="ern:AspectRatio" />
  colorDepth: ern.colorDepth,
  imageResolution: ern.imageResolution,
  isPreview: ern.isPreview,
  // @todo <xs:element name="PreviewDetails" minOccurs="0" type="ern:PreviewDetails" />
  file: ern.file ? convertFile(ern.file[0]) : undefined,
  // @todo <xs:element name="Fingerprint" minOccurs="0" maxOccurs="unbounded" type="ern:Fingerprint" />
});
