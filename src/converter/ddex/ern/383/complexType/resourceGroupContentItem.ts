import { Ern383, Ern411 } from "../../../../../types";
import { convertLinkedReleaseResourceReference } from "./linkedReleaseResourceReference";

export const convertResourceGroupContentItem = (
  resourceGroupContentItem: Ern383.ExtendedResourceGroupContentItem,
): Ern411.ResourceGroupContentItem => ({
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
});
