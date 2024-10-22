import { Avs20200108, Ern383, Ern411 } from "../../../../../types";
import { findUnique } from "../../utils";
import { isReleaseResourceReferenceList } from "../utils";
import { convertDisplayArtistFromArtist } from "./displayArtist";
import { convertDisplayTitleFromTitle } from "./displayTitle";
import { convertDisplayTitleText } from "./displayTitleText";
import { convertLinkedReleaseResourceReference } from "./linkedReleaseResourceReference";
import { convertResourceSubGroup } from "./resourceSubGroup";

export const convertResourceGroup = (
  parties: Ern411.Party[],
  resourceGroup: Ern383.ResourceGroup | Ern383.ReleaseResourceReferenceList,
): Ern411.ResourceGroup => {
  if (isReleaseResourceReferenceList(resourceGroup)) {
    const secondaryResources = resourceGroup.releaseResourceReference.filter(
      (releaseResourceReference) =>
        releaseResourceReference._attributes?.releaseResourceType ===
        Avs20200108.ReleaseResourceType.SECONDARY_RESOURCE,
    );

    return {
      resourceGroup: [convertResourceSubGroup(parties, resourceGroup)],
      linkedReleaseResourceReference:
        secondaryResources.length > 0
          ? secondaryResources.map((secondaryResource) =>
              convertLinkedReleaseResourceReference(secondaryResource),
            )
          : undefined,
    };
  }

  return {
    displayTitleText: resourceGroup.title
      ? findUnique(
          resourceGroup.title.map((displayTitleText) =>
            convertDisplayTitleText(displayTitleText.titleText),
          ),
        )
      : undefined,
    displayTitle: resourceGroup.title
      ? findUnique(
          resourceGroup.title.map((displayTitle) =>
            convertDisplayTitleFromTitle(displayTitle),
          ),
        )
      : undefined,
    additionalTitle: undefined,
    sequenceNumber: undefined,
    noDisplaySequence: undefined,
    displaySequence: undefined,
    displayArtist: resourceGroup.displayArtist
      ? resourceGroup.displayArtist.map((displayArtist) =>
          convertDisplayArtistFromArtist(parties, displayArtist),
        )
      : undefined,
    carrierType: undefined,
    duration: undefined,
    resourceGroupReleaseReference: undefined,
    releaseId: undefined,
    resourceGroup: resourceGroup.resourceGroup
      ? resourceGroup.resourceGroup.map((resourceGroup) =>
          convertResourceSubGroup(parties, resourceGroup),
        )
      : undefined,
    resourceGroupContentItem: undefined,
    linkedReleaseResourceReference: undefined,
  };
};
