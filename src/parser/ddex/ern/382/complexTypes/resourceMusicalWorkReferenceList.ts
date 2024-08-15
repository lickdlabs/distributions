import { Ern382 } from "../../../../../types";
import { parseResourceMusicalWorkReference } from "./resourceMusicalWorkReference";

export const parseResourceMusicalWorkReferenceList = (
  object: any,
): Ern382.ResourceMusicalWorkReferenceList => ({
  resourceMusicalWorkReference: object.ResourceMusicalWorkReference.map(
    (resourceMusicalWorkReference: any) =>
      parseResourceMusicalWorkReference(resourceMusicalWorkReference),
  ),
});
