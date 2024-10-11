import { Avs411, Ern383, Ern411 } from "../../../../../types";

export const convertLinkedReleaseResourceReference = (
  linkedReleaseResourceReference:
    | Ern383.LinkedReleaseResourceReference
    | Ern383.ReleaseResourceReference,
): Ern411.LinkedReleaseResourceReference => ({
  _attributes: linkedReleaseResourceReference._attributes
    ? {
        linkDescription:
          "linkDescription" in linkedReleaseResourceReference._attributes
            ? (linkedReleaseResourceReference._attributes
                .linkDescription as unknown as Avs411.LinkDescription)
            : undefined,
        languageAndScriptCode:
          "languageAndScriptCode" in linkedReleaseResourceReference._attributes
            ? linkedReleaseResourceReference._attributes.languageAndScriptCode
            : undefined,
        namespace: undefined,
        userDefinedValue: undefined,
      }
    : undefined,
  value: linkedReleaseResourceReference.value,
});
