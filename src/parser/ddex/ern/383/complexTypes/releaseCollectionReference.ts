import { Ern383 } from "../../../../../types";

export const parseReleaseCollectionReference = (
  object: any,
): Ern383.ReleaseCollectionReference => {
  const attributes = {
    releaseResourceType: object.$?.ReleaseResourceType || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
