import { Ern411 } from "../../../../../types";
import { parseCurrentTerritoryCode } from "./currentTerritoryCode";
import { parseSimpleRightsType } from "./simpleRightsType";
import { parseValidityPeriod } from "./validityPeriod";

export const parseAffiliation = (object: any): Ern411.Affiliation => ({
  ...parseAffiliationIdentifierChoice(object),
  type: object.Type[0],
  ...parseTerritoryCodeChoice(object),
  validityPeriod: object.ValidityPeriod
    ? parseValidityPeriod(object.ValidityPeriod[0])
    : undefined,
  rightsType: object.RightsType
    ? object.RightsType.map((rightsType: any) =>
        parseSimpleRightsType(rightsType),
      )
    : undefined,
  percentageOfRightsAssignment: object.PercentageOfRightsAssignment
    ? parseFloat(object.PercentageOfRightsAssignment[0])
    : undefined,
});

const parseAffiliationIdentifierChoice = (
  object: any,
): Ern411.AffiliationIdentifierChoice => {
  if (object.CompanyName) {
    return {
      companyName: object.CompanyName[0],
    };
  }

  return {
    partyAffiliateReference: object.PartyAffiliateReference[0],
  };
};

const parseTerritoryCodeChoice = (object: any): Ern411.TerritoryCodeChoice => {
  if (object.TerritoryCode) {
    return {
      territoryCode: object.TerritoryCode.map((territoryCode: any) =>
        parseCurrentTerritoryCode(territoryCode),
      ),
    };
  }

  return {
    excludedTerritoryCode: object.ExcludedTerritoryCode.map(
      (excludedTerritoryCode: any) =>
        parseCurrentTerritoryCode(excludedTerritoryCode),
    ),
  };
};
