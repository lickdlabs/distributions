import { Ern383, Ern411 } from "../../../../../types";
import { convertAspectRatio } from "./aspectRatio";
import { convertExtent } from "./extent";
import { convertFile } from "./file";
import { convertFingerprint } from "./fingerprint";
import { convertImageCodecType } from "./imageCodecType";
import { convertPreviewDetails } from "./previewDetails";

export const convertTechnicalImageDetails = (
  technicalImageDetails: Ern383.TechnicalImageDetails,
): Ern411.TechnicalImageDetails => ({
  _attributes: technicalImageDetails._attributes
    ? {
        languageAndScriptCode:
          technicalImageDetails._attributes.languageAndScriptCode,
        applicableTerritoryCode: undefined,
        isDefault: undefined,
      }
    : undefined,
  technicalResourceDetailsReference:
    technicalImageDetails.technicalResourceDetailsReference,
  imageCodecType: technicalImageDetails.imageCodecType
    ? convertImageCodecType(technicalImageDetails.imageCodecType)
    : undefined,
  imageHeight: technicalImageDetails.imageHeight
    ? convertExtent(technicalImageDetails.imageHeight)
    : undefined,
  imageWidth: technicalImageDetails.imageWidth
    ? convertExtent(technicalImageDetails.imageWidth)
    : undefined,
  aspectRatio: technicalImageDetails.aspectRatio
    ? convertAspectRatio(technicalImageDetails.aspectRatio)
    : undefined,
  colorDepth: technicalImageDetails.colorDepth,
  imageResolution: technicalImageDetails.imageResolution,
  isPreview: technicalImageDetails.isPreview,
  previewDetails: technicalImageDetails.previewDetails
    ? convertPreviewDetails(technicalImageDetails.previewDetails)
    : undefined,
  file: technicalImageDetails.file
    ? convertFile(technicalImageDetails.file[0])
    : undefined,
  fingerprint: technicalImageDetails.fingerprint?.map((fingerprint) =>
    convertFingerprint(fingerprint),
  ),
});
