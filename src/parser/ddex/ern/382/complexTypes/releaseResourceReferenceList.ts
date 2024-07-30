import { Ern382 } from "../../../../../types";
import { parseReleaseResourceReference } from "./releaseResourceReference";

export const parseReleaseResourceReferenceList = (
  object: any,
): Ern382.ReleaseResourceReferenceList => ({
  releaseResourceReference: object.ReleaseResourceReference.map(
    (releaseResourceReference: any) =>
      parseReleaseResourceReference(releaseResourceReference),
  ),
});
