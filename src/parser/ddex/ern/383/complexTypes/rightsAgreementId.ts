import { Ern383 } from "../../../../../types";
import { parseProprietaryId } from "./proprietaryId";

export const parseRightsAgreementId = (
  object: any,
): Ern383.RightsAgreementId => ({
  mwli: object.MWLI ? object.MWLI.map((mwli: string) => mwli) : undefined,
  proprietaryId: object.ProprietaryId
    ? object.MWLI.map((proprietaryId: any) => parseProprietaryId(proprietaryId))
    : undefined,
});
