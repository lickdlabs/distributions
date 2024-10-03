import { Ern383 } from "../../../../../types";

export const parseEventDate = (object: any): Ern383.EventDate => ({
  _attributes: object.$
    ? {
        isApproximate: object.$.IsApproximate
          ? object.$.IsApproximate === "true"
          : undefined,
        isBefore: object.$.IsBefore ? object.$.IsBefore === "true" : undefined,
        isAfter: object.$.IsAfter ? object.$.IsAfter === "true" : undefined,
        territoryCode: object.$.TerritoryCode || undefined,
        locationDescription: object.$.LocationDescription || undefined,
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
