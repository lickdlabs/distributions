import { Ern383 } from "../../../../../types";

export const parseReleaseResourceReference = (
  object: any,
): Ern383.ReleaseResourceReference => {
  const attributes = {
    releaseResourceType: object.$?.ReleaseResourceType || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
