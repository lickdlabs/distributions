import { Ern411 } from "../../../../../types";
import { normaliseImage } from "./image";

export const normaliseResourceList = (
  resourceList: Ern411.ResourceList,
  releaseList: Ern411.ReleaseList,
): void => {
  const release = releaseList.release;

  if (release) {
    release.resourceGroup.linkedReleaseResourceReference?.forEach(
      (linkedReleaseResourceReference) => {
        const image = resourceList.image?.find(
          (image) =>
            image.resourceReference === linkedReleaseResourceReference.value,
        );

        if (image) {
          normaliseImage(image, release);
        }
      },
    );
  }
};
