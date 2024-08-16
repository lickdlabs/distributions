import { Avs411, Ern383, Ern411 } from "../../../../../types";

export const convertCurrentTerritoryCode = (
  currentTerritoryCode: Ern383.AllTerritoryCode,
): Ern411.CurrentTerritoryCode => ({
  _attributes: currentTerritoryCode._attributes
    ? {
        identifierType: currentTerritoryCode._attributes
          .identifierType as unknown as Avs411.TerritoryCodeType,
      }
    : undefined,
  value: currentTerritoryCode.value as unknown as Avs411.CurrentTerritoryCode,
});
