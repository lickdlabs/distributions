import { Ern383 } from "../../../../../types";

export const parseEventDate = (object: any): Ern383.EventDate => {
  const attributes = {
    isApproximate: object.$?.IsApproximate
      ? object.$?.IsApproximate === "true"
      : undefined,
    isBefore: object.$?.IsBefore ? object.$?.IsBefore === "true" : undefined,
    isAfter: object.$?.IsAfter ? object.$?.IsAfter === "true" : undefined,
    territoryCode: object.$?.TerritoryCode || undefined,
    locationDescription: object.$?.LocationDescription || undefined,
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
