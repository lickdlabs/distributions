import { Ern382 } from "../../../../../types";
import { parseResourceContainedResourceReference } from "./resourceContainedResourceReference";

export const parseResourceContainedResourceReferenceList = (
  object: any,
): Ern382.ResourceContainedResourceReferenceList => ({
  resourceContainedResourceReference:
    object.ResourceContainedResourceReference.map(
      (resourceContainedResourceReference: any) =>
        parseResourceContainedResourceReference(
          resourceContainedResourceReference,
        ),
    ),
});
