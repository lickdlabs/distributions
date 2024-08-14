import { Ern411 } from "../../../../../types";
import { parseAspectRatio } from "./aspectRatio";
import { parseExtent } from "./extent";
import { parseFile } from "./file";
import { parseFingerprint } from "./fingerprint";
import { parseImageCodecType } from "./imageCodecType";
import { parsePreviewDetails } from "./previewDetails";

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
  bitDepth: object.BitDepth ? parseInt(object.BitDepth[0]) : undefined,
  isPreview: object.IsPreview ? object.IsPreview[0] === "true" : undefined,
  previewDetails: object.PreviewDetails
    ? parsePreviewDetails(object.PreviewDetails[0])
    : undefined,
  file: object.File ? parseFile(object.File[0]) : undefined,
  fingerprint: object.Fingerprint
    ? object.Fingerprint.map((fingerprint: any) =>
        parseFingerprint(fingerprint),
      )
    : undefined,
});
