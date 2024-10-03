import { Ern383 } from "../../../../../types";

export const parseGoverningAgreementType = (
  object: any,
): Ern383.GoverningAgreementType => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
