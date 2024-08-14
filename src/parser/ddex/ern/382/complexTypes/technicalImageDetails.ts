import { Ern382 } from "../../../../../types";
import { parseAspectRatio } from "./aspectRatio";
import { parseContainerFormat } from "./containerFormat";
import { parseDrmPlatformType } from "./drmPlatformType";
import { parseExtent } from "./extent";
import { parseFileChoice } from "./fileChoice";
import { parseFingerprint } from "./fingerprint";
import { parseFulfillmentDate } from "./fulfillmentDate";
import { parseImageCodecType } from "./imageCodecType";
import { parsePreviewDetails } from "./previewDetails";

export const parseTechnicalImageDetails = (
  object: any,
): Ern382.TechnicalImageDetails => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  technicalResourceDetailsReference:
    object.TechnicalResourceDetailsReference[0],
  drmPlatformType: object.DrmPlatformType
    ? parseDrmPlatformType(object.DrmPlatformType[0])
    : undefined,
  containerFormat: object.ContainerFormat
    ? parseContainerFormat(object.ContainerFormat[0])
    : undefined,
  imageCodecType: object.ImageCodecType
    ? parseImageCodecType(object.ImageCodecType[0])
    : undefined,
  imageHeight: object.ImageHeight
    ? parseExtent(object.ImageHeight[0])
    : undefined,
  imageWidth: object.ImageWidth ? parseExtent(object.ImageWidth[0]) : undefined,
  aspectRatio: object.AspectRatio
    ? parseAspectRatio(object.AspectRatio[0])
    : undefined,
  colorDepth: object.ColorDepth ? parseInt(object.ColorDepth[0]) : undefined,
  imageResolution: object.ImageResolution
    ? parseInt(object.ImageResolution[0])
    : undefined,
  isPreview: object.IsPreview ? object.IsPreview[0] === "true" : undefined,
  previewDetails: object.PreviewDetails
    ? parsePreviewDetails(object.PreviewDetails[0])
    : undefined,
  fulfillmentDate: object.FulfillmentDate
    ? parseFulfillmentDate(object.FulfillmentDate[0])
    : undefined,
  consumerFulfillmentDate: object.ConsumerFulfillmentDate
    ? parseFulfillmentDate(object.ConsumerFulfillmentDate[0])
    : undefined,
  ...parseFileChoice(object),
  fingerprint: object.Fingerprint
    ? object.Fingerprint.map((fingerprint: any) =>
        parseFingerprint(fingerprint),
      )
    : undefined,
});
