import { Ern411 } from "../../../../../types";

export const parseDisplayCredits = (object: any): Ern411.DisplayCredits => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
        applicableTerritoryCode: object.$.ApplicableTerritoryCode || undefined,
        isDefault: object.$.IsDefault
          ? object.$.IsDefault === "true"
          : undefined,
      }
    : undefined,
  displayCreditText: object.DisplayCreditText[0],
  displayCreditPartyList: object.DisplayCreditParty
    ? object.DisplayCreditParty.map(
        (displayCreditPartyList: any, i: number) => ({
          displayCreditPartyList,
          nameUsedInDisplayCredit:
            object.NameUsedInDisplayCredit && object.NameUsedInDisplayCredit[i]
              ? object.NameUsedInDisplayCredit[i]
              : undefined,
        }),
      )
    : undefined,
});
