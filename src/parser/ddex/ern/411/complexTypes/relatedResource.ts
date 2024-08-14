import { Ern411 } from "../../../../../types";
import { parseReleaseId } from "./releaseId";
import { parseTiming } from "./timing";

export const parseRelatedResource = (object: any): Ern411.RelatedResource => ({
  resourceRelationshipType: object.ResourceRelationshipType[0],
  ...parseRelatedResourceIdentifier(object),
  timing: object.Timing
    ? object.Timing.map((timing: any) => parseTiming(timing))
    : undefined,
});

const parseRelatedResourceIdentifier = (
  object: any,
): Ern411.RelatedResourceIdentifier => {
  if (object.ResourceRelatedResourceReference) {
    return {
      resourceRelatedResourceReference:
        object.ResourceRelatedResourceReference[0],
    };
  }

  return {
    releaseId: parseReleaseId(object.ReleaseId[0]),
  };
};
