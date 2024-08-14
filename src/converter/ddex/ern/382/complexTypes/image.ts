import { Ern382, Ern383 } from "../../../../../types";
import { convertImageDetailsByTerritory } from "./imageDetailsByTerritory";

export const convertImage = (image: Ern382.Image): Ern383.Image => ({
  ...image,
  imageDetailsByTerritory: image.imageDetailsByTerritory.map(
    (imageDetailsByTerritory) =>
      convertImageDetailsByTerritory(imageDetailsByTerritory),
  ),
});
