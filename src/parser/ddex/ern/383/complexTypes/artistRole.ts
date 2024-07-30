import { Ern383 } from "../../../../../types";

export const parseArtistRole = (object: any): Ern383.ArtistRole => {
  const attributes = {
    namespace: object.$?.Namespace || undefined,
    userDefinedValue: object.$?.UserDefinedValue || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
