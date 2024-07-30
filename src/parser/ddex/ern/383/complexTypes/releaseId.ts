import { Ern383 } from "../../../../../types";
import { parseCatalogNumber } from "./catalogNumber";
import { parseIcpn } from "./icpn";
import { parseProprietaryId } from "./proprietaryId";

export const parseReleaseId = (object: any): Ern383.ReleaseId => {
  const attributes = {
    isReplaced: object.$?.IsReplaced
      ? object.$.IsReplaced === "true"
      : undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    grid: object.GRID ? object.GRID[0] : undefined,
    isrc: object.ISRC ? object.ISRC[0] : undefined,
    icpn: object.ICPN ? parseIcpn(object.ICPN[0]) : undefined,
    catalogNumber: object.CatalogNumber
      ? parseCatalogNumber(object.CatalogNumber[0])
      : undefined,
    proprietaryId: object.ProprietaryId
      ? object.ProprietaryId.map((proprietaryId: any) =>
          parseProprietaryId(proprietaryId),
        )
      : undefined,
  };
};
