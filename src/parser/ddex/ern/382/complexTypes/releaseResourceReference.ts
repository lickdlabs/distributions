import { Ern382 } from "../../../../../types";

export const parseReleaseResourceReference = (
  object: any,
): Ern382.ReleaseResourceReference => ({
  _attributes: object.$
    ? {
        releaseResourceType: object.$.ReleaseResourceType || undefined,
      }
    : undefined,
  value: (
    (object._ || object) as string
  ).trim() as Ern382.ReleaseResourceReference["value"],
});
