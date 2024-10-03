import { Ern383 } from "../../../../../types";

export const parseContainerFormat = (object: any): Ern383.ContainerFormat => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
