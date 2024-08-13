import { Avs411, Ern383, Ern411 } from "../../../../../types";

export const convertLinkedReleaseResourceReference = (
  linkedReleaseResourceReference: Ern383.LinkedReleaseResourceReference,
): Ern411.LinkedReleaseResourceReference => ({
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
});
