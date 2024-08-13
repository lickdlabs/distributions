import { Ern383, Ern411 } from "../../../../../types";
import { convertExternallyLinkedResourceType } from "./externallyLinkedResourceType";
import { convertPeriodWithoutFlags } from "./periodWithoutFlags";

export const convertExternalResourceLink = (
  externalResourceLink: Ern383.ExternalResourceLink,
): Ern411.ExternalResourceLink => ({
  url: externalResourceLink.url,
  validityPeriod: externalResourceLink.validityPeriod
    ? convertPeriodWithoutFlags(externalResourceLink.validityPeriod)
    : undefined,
  externalLink: externalResourceLink.externalLink,
  externallyLinkedResourceType:
    externalResourceLink.externallyLinkedResourceType
      ? externalResourceLink.externallyLinkedResourceType.map(
          (externallyLinkedResourceType) =>
            convertExternallyLinkedResourceType(externallyLinkedResourceType),
        )
      : undefined,
  fileFormat: externalResourceLink.fileFormat,
});
