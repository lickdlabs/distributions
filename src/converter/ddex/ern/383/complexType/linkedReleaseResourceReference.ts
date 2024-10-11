import { Avs411, Ern383, Ern411 } from "../../../../../types";
import { isReleaseResourceReference } from "../utils";

export const convertLinkedReleaseResourceReference = (
  linkedReleaseResourceReference:
    | Ern383.LinkedReleaseResourceReference
    | Ern383.ReleaseResourceReference,
): Ern411.LinkedReleaseResourceReference => {
  if (isReleaseResourceReference(linkedReleaseResourceReference)) {
    return {
      _attributes: undefined,
      value: linkedReleaseResourceReference.value,
    };
  }

  return {
    _attributes: linkedReleaseResourceReference._attributes
      ? {
          linkDescription: linkedReleaseResourceReference._attributes
            .linkDescription as unknown as Avs411.LinkDescription,
          languageAndScriptCode:
            linkedReleaseResourceReference._attributes.languageAndScriptCode,
          namespace: undefined,
          userDefinedValue: undefined,
        }
      : undefined,
    value: linkedReleaseResourceReference.value,
  };
};
