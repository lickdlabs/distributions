import { Ern411 } from "../../../../../types";
import { parseFile } from "./file";

export const parseTechnicalImageDetails = (
  object: any,
): Ern411.TechnicalImageDetails => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
        applicableTerritoryCode: object.$.ApplicableTerritoryCode || undefined,
        isDefault: object.$.IsDefault
          ? object.$.IsDefault === "true"
          : undefined,
      }
    : undefined,
  technicalResourceDetailsReference:
    object.TechnicalResourceDetailsReference[0],
  // @todo <xs:element name="ImageCodecType" minOccurs="0" type="ern:ImageCodecType" />
  // @todo <xs:element name="ImageHeight" minOccurs="0" type="ern:Extent" />
  // @todo <xs:element name="ImageWidth" minOccurs="0" type="ern:Extent" />
  // @todo <xs:element name="AspectRatio" minOccurs="0" type="ern:AspectRatio" />
  colorDepth: object.ColorDepth ? parseInt(object.ColorDepth[0]) : undefined,
  imageResolution: object.ImageResolution
    ? parseInt(object.ImageResolution[0])
    : undefined,
  bitDepth: object.BitDepth ? parseInt(object.BitDepth[0]) : undefined,
  isPreview: object.IsPreview ? object.IsPreview[0] === "true" : undefined,
  // @todo <xs:element name="PreviewDetails" minOccurs="0" type="ern:PreviewDetails" />
  // @todo <xs:element name="File" minOccurs="0" type="ern:File" />
  file: object.File ? parseFile(object.File[0]) : undefined,
  // @todo <xs:element name="Fingerprint" minOccurs="0" maxOccurs="unbounded" type="ern:Fingerprint" />
});
