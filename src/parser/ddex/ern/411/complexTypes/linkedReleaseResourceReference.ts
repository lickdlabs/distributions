import { Ern411 } from "../../../../../types";

export const parseLinkedReleaseResourceReference = (
  object: any,
): Ern411.LinkedReleaseResourceReference => ({
  _attributes: object.$
    ? {
        linkDescription: object.$.LinkDescription || undefined,
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object._ || object,
});
