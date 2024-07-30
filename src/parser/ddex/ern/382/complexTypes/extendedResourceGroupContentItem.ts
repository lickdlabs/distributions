import { Ern382 } from "../../../../../types";
import { convertDurationToMilliseconds } from "../../../../../utils";
import { parseLinkedReleaseResourceReference } from "./linkedReleaseResourceReference";
import { parseReleaseId } from "./releaseId";
import { parseReleaseResourceReference } from "./releaseResourceReference";
import { parseResourceType } from "./resourceType";

export const parseExtendedResourceGroupContentItem = (
  object: any,
): Ern382.ExtendedResourceGroupContentItem => ({
  sequenceNumber: object.SequenceNumber
    ? parseInt(object.SequenceNumber[0])
    : undefined,
  sequenceSubNumber: object.SequenceSubNumber
    ? parseInt(object.SequenceSubNumber[0])
    : undefined,
  resourceType: object.ResourceType
    ? object.ResourceType.map((resourceType: any) =>
        parseResourceType(resourceType),
      )
    : undefined,
  releaseResourceReference: parseReleaseResourceReference(
    object.ReleaseResourceReference[0],
  ),
  linkedReleaseResourceReference: object.LinkedReleaseResourceReference
    ? parseLinkedReleaseResourceReference(
        object.LinkedReleaseResourceReference[0],
      )
    : undefined,
  ...parseResourceGroupContentItemIdentifierChoice(object),
  duration: object.Duration
    ? convertDurationToMilliseconds(object.Duration[0])
    : undefined,
  isHiddenResource: object.IsHiddenResource
    ? object.IsHiddenResource[0] === "true"
    : undefined,
  isBonusResource: object.IsBonusResource
    ? object.IsBonusResource[0] === "true"
    : undefined,
  isInstantGratificationResource: object.IsInstantGratificationResource
    ? object.IsInstantGratificationResource[0] === "true"
    : undefined,
  isPreOrderIncentiveResource: object.IsPreOrderIncentiveResource
    ? object.IsPreOrderIncentiveResource[0] === "true"
    : undefined,
});

const parseResourceGroupContentItemIdentifierChoice = (
  object: any,
): Partial<Ern382.ResourceGroupContentItemIdentifierChoice> => {
  if (object.ResourceGroupContentItemReleaseReference) {
    return {
      resourceGroupContentItemReleaseReference:
        object.ResourceGroupContentItemReleaseReference[0],
    };
  }

  if (object.ReleaseId) {
    return {
      releaseId: parseReleaseId(object.ReleaseId[0]),
    };
  }

  return {};
};
