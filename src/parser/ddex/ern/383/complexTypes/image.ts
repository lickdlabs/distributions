import { Ern383 } from "../../../../../types";
import { parseImageDetailsByTerritory } from "./imageDetailsByTerritory";
import { parseResourceProprietaryId } from "./resourceProprietaryId";

export const parseImage = (object: any): Ern383.Image => ({
  imageId: object.ImageId.map((imageId: any) =>
    parseResourceProprietaryId(imageId),
  ),
  resourceReference: object.ResourceReference[0],
  imageDetailsByTerritory: object.ImageDetailsByTerritory.map(
    (imageDetailsByTerritory: any) =>
      parseImageDetailsByTerritory(imageDetailsByTerritory),
  ),
});
