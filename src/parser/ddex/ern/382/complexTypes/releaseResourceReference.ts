import { Ern382 } from "../../../../../types";

export const parseReleaseResourceReference = (
  object: any,
): Ern382.ReleaseResourceReference => {
  const attributes = {
    releaseResourceType: object.$?.ReleaseResourceType || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
