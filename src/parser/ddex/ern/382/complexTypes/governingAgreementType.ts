import { Ern382 } from "../../../../../types";

export const parseGoverningAgreementType = (
  object: any,
): Ern382.GoverningAgreementType => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object._ || object,
});
