import { Ern383, Ern411 } from "../../../../../types";
import { findUnique } from "../../../../../utils";
import { convertDisplayArtist } from "./displayArtist";
import { convertDisplayTitleFromTitle } from "./displayTitle";
import { convertDisplayTitleText } from "./displayTitleText";
import { convertResourceSubGroup } from "./resourceSubGroup";

export const convertResourceGroup = (
  parties: Ern411.Party[],
  resourceGroup: Ern383.ResourceGroup,
): Ern411.ResourceGroup => ({
  displayTitleText: resourceGroup?.title
    ? findUnique(
        resourceGroup?.title.map((displayTitleText) =>
          convertDisplayTitleText(displayTitleText.titleText),
        ),
      )
    : undefined,
  displayTitle: resourceGroup?.title
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
  displayArtist: resourceGroup?.displayArtist
    ? resourceGroup.displayArtist.map((displayArtist) =>
        convertDisplayArtist(parties, displayArtist),
      )
    : undefined,
  carrierType: undefined,
  duration: undefined,
  resourceGroupReleaseReference: undefined,
  releaseId: undefined,
  resourceGroup: resourceGroup?.resourceGroup
    ? resourceGroup.resourceGroup.map((resourceGroup) =>
        convertResourceSubGroup(parties, resourceGroup),
      )
    : undefined,
  resourceGroupContentItem: undefined,
  linkedReleaseResourceReference: undefined,
});
