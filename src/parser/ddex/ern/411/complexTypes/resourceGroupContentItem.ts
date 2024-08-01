import { Ern411 } from "../../../../../types";
import { parseLinkedReleaseResourceReference } from "./linkedReleaseResourceReference";

export const parseResourceGroupContentItem = (
  object: any,
): Ern411.ResourceGroupContentItem => ({
  sequenceNumber: object.SequenceNumber
    ? parseInt(object.SequenceNumber[0])
    : undefined,
  releaseResourceReference: object.ReleaseResourceReference[0],
  linkedReleaseResourceReference: object.LinkedReleaseResourceReference
    ? object.LinkedReleaseResourceReference.map(
        (linkedReleaseResourceReference: any) =>
          parseLinkedReleaseResourceReference(linkedReleaseResourceReference),
      )
    : undefined,
  isBonusResource: object.IsBonusResource
    ? object.IsBonusResource === "true"
    : undefined,
  isInstantGratificationResource: object.IsInstantGratificationResource
    ? object.IsInstantGratificationResource === "true"
    : undefined,
  isPreOrderIncentiveResource: object.IsPreOrderIncentiveResource
    ? object.IsPreOrderIncentiveResource === "true"
    : undefined,
});
