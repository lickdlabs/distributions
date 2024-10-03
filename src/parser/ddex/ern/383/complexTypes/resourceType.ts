import { Ern383 } from "../../../../../types";

export const parseResourceType = (object: any): Ern383.ResourceType => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
