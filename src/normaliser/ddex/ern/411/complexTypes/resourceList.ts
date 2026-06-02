import { Ern411 } from "../../../../../types";
import { normaliseImage } from "./image";

type ResourceGroupLike = Pick<
  Ern411.ResourceGroup,
  "linkedReleaseResourceReference" | "resourceGroup" | "resourceGroupContentItem"
>;

const collectLinkedResourceReferences = (
  group: ResourceGroupLike,
): Ern411.LinkedReleaseResourceReference[] => {
  const references: Ern411.LinkedReleaseResourceReference[] = [];

  if (group.linkedReleaseResourceReference) {
    references.push(...group.linkedReleaseResourceReference);
  }

  group.resourceGroupContentItem?.forEach((item) => {
    if (item.linkedReleaseResourceReference) {
      references.push(...item.linkedReleaseResourceReference);
    }
  });

  group.resourceGroup?.forEach((subGroup) => {
    references.push(...collectLinkedResourceReferences(subGroup));
  });

  return references;
};

export const normaliseResourceList = (
  resourceList: Ern411.ResourceList,
  releaseList: Ern411.ReleaseList,
): void => {
  const release = releaseList.release;

  if (!release) {
    return;
  }

  collectLinkedResourceReferences(release.resourceGroup).forEach(
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
};
