import { Ern383 } from "../../../../../types";

export const parseReleaseCollectionReference = (
  object: any,
): Ern383.ReleaseCollectionReference => ({
  _attributes: object.$
    ? {
        releaseResourceType: object.$.ReleaseResourceType || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
