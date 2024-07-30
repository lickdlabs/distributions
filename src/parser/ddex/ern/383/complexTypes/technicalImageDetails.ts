import { Ern383 } from "../../../../../types";
import { parseFileChoice } from "./fileChoice";

export const parseTechnicalImageDetails = (
  object: any,
): Ern383.TechnicalImageDetails => {
  const attributes = {
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    technicalResourceDetailsReference:
      object.TechnicalResourceDetailsReference[0],
    // @todo <xs:element name="DrmPlatformType" minOccurs="0" type="ern:DrmPlatformType" />
    // @todo <xs:element name="ContainerFormat" minOccurs="0" type="ern:ContainerFormat" />
    // @todo <xs:element name="ImageCodecType" minOccurs="0" type="ern:ImageCodecType" />
    // @todo <xs:element name="ImageHeight" minOccurs="0" type="ern:Extent" />
    // @todo <xs:element name="ImageWidth" minOccurs="0" type="ern:Extent" />
    // @todo <xs:element name="AspectRatio" minOccurs="0" type="ern:AspectRatio" />
    colorDepth: object.ColorDepth ? parseInt(object.ColorDepth[0]) : undefined,
    imageResolution: object.ImageResolution
      ? parseInt(object.ImageResolution[0])
      : undefined,
    isPreview: object.IsPreview ? object.IsPreview[0] === "true" : undefined,
    // @todo <xs:element name="PreviewDetails" minOccurs="0" type="ern:PreviewDetails" />
    // @todo <xs:element name="FulfillmentDate" minOccurs="0" type="ern:FulfillmentDate" />
    // @todo <xs:element name="ConsumerFulfillmentDate" minOccurs="0" type="ern:FulfillmentDate" />
    ...parseFileChoice(object),
    // @todo <xs:element name="Fingerprint" minOccurs="0" maxOccurs="unbounded" type="ern:Fingerprint" />
  };
};
