import { Avs411, Ern383, Ern411 } from "../../../../../types";
import { convertTechnicalImageDetails } from "./technicalImageDetails";

export const convertImage = (ern: Ern383.Image): Ern411.Image => ({
  _attributes:
    ern._attributes && ern._attributes.languageAndScriptCode
      ? {
          languageAndScriptCode: ern._attributes.languageAndScriptCode,
        }
      : undefined,
  resourceReference: ern.resourceReference,
  type: {
    value: Avs411.ImageType.UNKNOWN,
  },
  resourceId: ern.imageId,
  technicalDetails: ern.imageDetailsByTerritory[0].technicalImageDetails
    ? ern.imageDetailsByTerritory[0].technicalImageDetails.map(
        (technicalImageDetails) =>
          convertTechnicalImageDetails(technicalImageDetails),
      )
    : undefined,
});
