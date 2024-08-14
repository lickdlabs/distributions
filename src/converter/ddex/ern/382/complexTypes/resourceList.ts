import { Ern382, Ern383 } from "../../../../../types";
import { convertImage } from "./image";

export const convertResourceList = (
  resourceList: Ern382.ResourceList,
): Ern383.ResourceList => ({
  ...resourceList,
  image: resourceList.image?.map((image) => convertImage(image)),
});
