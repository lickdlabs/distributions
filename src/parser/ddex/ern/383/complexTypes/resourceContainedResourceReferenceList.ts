import { Ern383 } from "../../../../../types";
import { parseResourceContainedResourceReference } from "./resourceContainedResourceReference";

export const parseResourceContainedResourceReferenceList = (
  object: any,
): Ern383.ResourceContainedResourceReferenceList => ({
  resourceContainedResourceReference:
    object.ResourceContainedResourceReference.map(
      (resourceContainedResourceReference: any) =>
        parseResourceContainedResourceReference(
          resourceContainedResourceReference,
        ),
    ),
});
