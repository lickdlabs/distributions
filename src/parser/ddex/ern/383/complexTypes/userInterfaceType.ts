import { Ern383 } from "../../../../../types";

export const parseUserInterfaceType = (
  object: any,
): Ern383.UserInterfaceType => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object._ || object,
});
