import { Ern383 } from "../../../../../types";
import { parseResourceMusicalWorkReference } from "./resourceMusicalWorkReference";

export const parseResourceMusicalWorkReferenceList = (
  object: any,
): Ern383.ResourceMusicalWorkReferenceList => ({
  resourceMusicalWorkReference: object.ResourceMusicalWorkReference.map(
    (resourceMusicalWorkReference: any) =>
      parseResourceMusicalWorkReference(resourceMusicalWorkReference),
  ),
});
