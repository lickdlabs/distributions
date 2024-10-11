import { Ern383, Ern411 } from "../../../../../types";
import { isReleaseResourceReference } from "../utils";
import { convertLinkedReleaseResourceReference } from "./linkedReleaseResourceReference";

export const convertResourceGroupContentItem = (
  resourceGroupContentItem:
    | Ern383.ExtendedResourceGroupContentItem
    | Ern383.ReleaseResourceReference,
): Ern411.ResourceGroupContentItem => {
  if (isReleaseResourceReference(resourceGroupContentItem)) {
    return {
      releaseResourceReference: resourceGroupContentItem.value,
    };
  }

  return {
    sequenceNumber: resourceGroupContentItem.sequenceNumber,
    releaseResourceReference:
      resourceGroupContentItem.releaseResourceReference.value,
    linkedReleaseResourceReference:
      resourceGroupContentItem.linkedReleaseResourceReference
        ? resourceGroupContentItem.linkedReleaseResourceReference.map(
            (linkedReleaseResourceReference) =>
              convertLinkedReleaseResourceReference(
                linkedReleaseResourceReference,
              ),
          )
        : undefined,
    isBonusResource: resourceGroupContentItem.isBonusResource,
    isInstantGratificationResource:
      resourceGroupContentItem.isInstantGratificationResource,
    isPreOrderIncentiveResource:
      resourceGroupContentItem.isPreOrderIncentiveResource,
  };
};
