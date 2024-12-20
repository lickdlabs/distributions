import { Avs20200108, Avs411, Ern383, Ern411 } from "../../../../../types";
import { isReleaseResourceReferenceList } from "../utils";
import { convertCarrierType } from "./carrierType";
import { convertDisplayArtistFromArtist } from "./displayArtist";
import { convertDisplayTitleFromTitle } from "./displayTitle";
import { convertDisplayTitleText } from "./displayTitleText";
import { convertResourceGroupContentItem } from "./resourceGroupContentItem";
import { convertResourceGroupIdentifierChoice } from "./resourceGroupIdentifierChoice";

export const convertResourceSubGroup = (
  parties: Ern411.Party[],
  resourceGroup: Ern383.ResourceGroup | Ern383.ReleaseResourceReferenceList,
): Ern411.ResourceSubGroup => {
  if (isReleaseResourceReferenceList(resourceGroup)) {
    const primaryResources = resourceGroup.releaseResourceReference.filter(
      (releaseResourceReference) =>
        releaseResourceReference._attributes?.releaseResourceType ===
        Avs20200108.ReleaseResourceType.PRIMARY_RESOURCE,
    );

    return {
      _attributes: {
        resourceGroupType: Avs411.ResourceGroupType.COMPONENT,
      },
      resourceGroupContentItem:
        primaryResources.length > 0
          ? primaryResources.map((primaryResource) =>
              convertResourceGroupContentItem(primaryResource),
            )
          : undefined,
    };
  }

  return {
    _attributes: {
      resourceGroupType: Avs411.ResourceGroupType.COMPONENT,
    },
    displayTitleText: resourceGroup.title
      ? resourceGroup.title.map((displayTitleText) =>
          convertDisplayTitleText(displayTitleText.titleText),
        )
      : undefined,
    displayTitle: resourceGroup.title
      ? resourceGroup.title.map((displayTitle) =>
          convertDisplayTitleFromTitle(displayTitle),
        )
      : undefined,
    additionalTitle: undefined,
    sequenceNumber: resourceGroup.sequenceNumber,
    noDisplaySequence: undefined,
    displaySequence: undefined,
    displayArtist: resourceGroup.displayArtist
      ? resourceGroup.displayArtist.map((displayArtist) =>
          convertDisplayArtistFromArtist(parties, displayArtist),
        )
      : undefined,
    carrierType: resourceGroup.carrierType
      ? resourceGroup.carrierType.map((carrierType) =>
          convertCarrierType(carrierType),
        )
      : undefined,
    duration: undefined,
    ...convertResourceGroupIdentifierChoice(resourceGroup),
    resourceGroup: resourceGroup.resourceGroup
      ? resourceGroup.resourceGroup.map((resourceSubGroup) =>
          convertResourceSubGroup(parties, resourceSubGroup),
        )
      : undefined,
    resourceGroupContentItem: resourceGroup.resourceGroupContentItem
      ? resourceGroup.resourceGroupContentItem.map((resourceGroupContentItem) =>
          convertResourceGroupContentItem(resourceGroupContentItem),
        )
      : undefined,
    linkedReleaseResourceReference: undefined,
  };
};
