import { Ern383 } from "../../../../../types";
import { parseReleaseCollectionReference } from "./releaseCollectionReference";

export const parseReleaseCollectionReferenceList = (
  object: any,
): Ern383.ReleaseCollectionReferenceList => ({
  numberOfCollections: object.NumberOfCollections
    ? parseInt(object.NumberOfCollections[0])
    : undefined,
  releaseCollectionReference: object.ReleaseCollectionReference.map(
    (releaseCollectionReference: any) =>
      parseReleaseCollectionReference(releaseCollectionReference),
  ),
});
