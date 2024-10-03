import { Ern382 } from "../../../../../types";

export const parseResourceType = (object: any): Ern382.ResourceType => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
