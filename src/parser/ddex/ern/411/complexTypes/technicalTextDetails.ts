import { Ern411 } from "../../../../../types";
import { parseFile } from "./file";

export const parseTechnicalTextDetails = (
  object: any,
): Ern411.TechnicalTextDetails => ({
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
  // @todo <xs:element name="TextCodecType" minOccurs="0" type="ern:TextCodecType" />
  bitDepth: object.BitDepth ? parseInt(object.BitDepth[0]) : undefined,
  isPreview: object.IsPreview ? object.IsPreview[0] === "true" : undefined,
  // @todo <xs:element name="PreviewDetails" minOccurs="0" type="ern:PreviewDetails" />
  file: object.File ? parseFile(object.File[0]) : undefined,
  // @todo <xs:element name="Fingerprint" minOccurs="0" maxOccurs="unbounded" type="ern:Fingerprint" />
});
