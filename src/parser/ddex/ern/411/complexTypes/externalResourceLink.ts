import { Ern411 } from "../../../../../types";
import { parseExternallyLinkedResourceType } from "./externallyLinkedResourceType";
import { parsePeriodWithoutFlags } from "./periodWithoutFlags";

export const parseExternalResourceLink = (
  object: any,
): Ern411.ExternalResourceLink => ({
  url: object.URL.map((url: string) => url),
  validityPeriod: object.ValidityPeriod
    ? parsePeriodWithoutFlags(object.ValidityPeriod[0])
    : undefined,
  externalLink: object.ExternalLink ? object.ExternalLink[0] : undefined,
  externallyLinkedResourceType: object.ExternallyLinkedResourceType
    ? object.ExternallyLinkedResourceType.map(
        (externallyLinkedResourceType: any) =>
          parseExternallyLinkedResourceType(externallyLinkedResourceType),
      )
    : undefined,
  fileFormat: object.FileFormat ? object.FileFormat[0] : undefined,
});
