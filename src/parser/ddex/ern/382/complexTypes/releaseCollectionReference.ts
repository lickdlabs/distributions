import { Ern382 } from "../../../../../types";

export const parseReleaseCollectionReference = (
  object: any,
): Ern382.ReleaseCollectionReference => ({
  _attributes: object.$
    ? {
        releaseResourceType: object.$.ReleaseResourceType || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
