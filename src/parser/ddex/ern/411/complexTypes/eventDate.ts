import { Ern411 } from "../../../../../types";

export const parseEventDate = (object: any): Ern411.EventDate => ({
  _attributes: object.$
    ? {
        isApproximate: object.$.IsApproximate
          ? object.$.IsApproximate === "true"
          : undefined,
        isBefore: object.$.IsBefore ? object.$.IsBefore === "true" : undefined,
        isAfter: object.$.IsAfter ? object.$.IsAfter === "true" : undefined,
        applicableTerritoryCode: object.$.ApplicableTerritoryCode || undefined,
        locationDescription: object.$.LocationDescription || undefined,
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  value: new Date(object.$ ? object._ : object),
});
