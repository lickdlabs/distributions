import { Ern383 } from "../../../../../types";

export const parseReleaseResourceReference = (
  object: any,
): Ern383.ReleaseResourceReference => ({
  _attributes: object.$
    ? {
        releaseResourceType: object.$.ReleaseResourceType || undefined,
      }
    : undefined,
  value: object._ || object,
});
