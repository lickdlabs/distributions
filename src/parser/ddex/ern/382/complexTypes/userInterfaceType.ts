import { Ern382 } from "../../../../../types";

export const parseUserInterfaceType = (
  object: any,
): Ern382.UserInterfaceType => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
