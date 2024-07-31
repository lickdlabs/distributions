import { Ern383 } from "../../../../../types";
import { parseExternallyLinkedResourceType } from "./externallyLinkedResourceType";
import { parsePeriod } from "./period";

export const parseExternalResourceLink = (
  object: any,
): Ern383.ExternalResourceLink => ({
  url: object.URL.map((url: string) => url),
  validityPeriod: object.ValidityPeriod
    ? parsePeriod(object.ValidityPeriod[0])
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
