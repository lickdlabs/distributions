import { Ern411 } from "../../../../../types";
import { parseImageType } from "./imageType";
import { parseResourceProprietaryId } from "./resourceProprietaryId";
import { parseTechnicalImageDetails } from "./technicalImageDetails";

export const parseImage = (object: any): Ern411.Image => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
        isSupplemental: object.$.IsSupplemental
          ? object.$.IsSupplemental === "true"
          : undefined,
      }
    : undefined,
  resourceReference: object.ResourceReference[0],
  type: parseImageType(object.Type[0]),
  resourceId: object.ResourceId.map((resourceId: any) =>
    parseResourceProprietaryId(resourceId),
  ),
  technicalDetails: object.TechnicalDetails
    ? object.TechnicalDetails.map((technicalDetails: any) =>
        parseTechnicalImageDetails(technicalDetails),
      )
    : undefined,
});
