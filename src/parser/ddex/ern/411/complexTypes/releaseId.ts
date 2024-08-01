import { Ern411 } from "../../../../../types";
import { parseCatalogNumber } from "./catalogNumber";
import { parseProprietaryId } from "./proprietaryId";

export const parseReleaseId = (object: any): Ern411.ReleaseId => ({
  grid: object.GRID ? object.GRID[0] : undefined,
  isrc: object.ISRC ? object.ISRC[0] : undefined,
  icpn: object.ICPN ? object.ICPN[0] : undefined,
  catalogNumber: object.CatalogNumber
    ? parseCatalogNumber(object.CatalogNumber[0])
    : undefined,
  proprietaryId: object.ProprietaryId
    ? object.ProprietaryId.map((proprietaryId: any) =>
        parseProprietaryId(proprietaryId),
      )
    : undefined,
});
