import { Ern382 } from "../../../../../types";
import { parseEventDate } from "./eventDate";
import { parseImageDetailsByTerritory } from "./imageDetailsByTerritory";
import { parseImageType } from "./imageType";
import { parseResourceProprietaryId } from "./resourceProprietaryId";
import { parseTitle } from "./title";

export const parseImage = (object: any): Ern382.Image => ({
  _attributes: object.$
    ? {
        isUpdated: object.$.IsUpdated
          ? object.$.IsUpdated === "true"
          : undefined,
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  imageType: object.ImageType ? parseImageType(object.ImageType[0]) : undefined,
  isArtistRelated: object.IsArtistRelated
    ? object.IsArtistRelated[0] === "true"
    : undefined,
  imageId: object.ImageId.map((imageId: any) =>
    parseResourceProprietaryId(imageId),
  ),
  resourceReference: object.ResourceReference[0],
  title: object.Title
    ? object.Title.map((title: any) => parseTitle(title))
    : undefined,
  creationDate: object.CreationDate
    ? parseEventDate(object.CreationDate[0])
    : undefined,
  imageDetailsByTerritory: object.ImageDetailsByTerritory.map(
    (imageDetailsByTerritory: any) =>
      parseImageDetailsByTerritory(imageDetailsByTerritory),
  ),
});
