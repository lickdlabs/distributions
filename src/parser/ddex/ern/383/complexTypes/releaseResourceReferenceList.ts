import { Ern383 } from "../../../../../types";
import { parseReleaseResourceReference } from "./releaseResourceReference";

export const parseReleaseResourceReferenceList = (
  object: any,
): Ern383.ReleaseResourceReferenceList => ({
  releaseResourceReference: object.ReleaseResourceReference.map(
    (releaseResourceReference: any) =>
      parseReleaseResourceReference(releaseResourceReference),
  ),
});
