import { Ern411 } from "../../../../../types";
import { parseDuration } from "../../utils";
import { parseAdditionalTitle } from "./additionalTitle";
import { parseCarrierType } from "./carrierType";
import { parseDisplayArtist } from "./displayArtist";
import { parseDisplaySequenceChoice } from "./displaySequenceChoice";
import { parseDisplayTitle } from "./displayTitle";
import { parseDisplayTitleText } from "./displayTitleText";
import { parseLinkedReleaseResourceReference } from "./linkedReleaseResourceReference";
import { parseResourceGroupContentItem } from "./resourceGroupContentItem";
import { parseResourceGroupIdentifierChoice } from "./resourceGroupIdentifierChoice";

export const parseResourceSubGroup = (
  object: any,
): Ern411.ResourceSubGroup => ({
  _attributes: {
    resourceGroupType: object.$.ResourceGroupType,
  },
  displayTitleText: object.DisplayTitleText
    ? object.DisplayTitleText.map((displayTitleText: any) =>
        parseDisplayTitleText(displayTitleText),
      )
    : undefined,
  displayTitle: object.DisplayTitle
    ? object.DisplayTitle.map((displayTitle: any) =>
        parseDisplayTitle(displayTitle),
      )
    : undefined,
  additionalTitle: object.AdditionalTitle
    ? object.AdditionalTitle.map((additionalTitle: any) =>
        parseAdditionalTitle(additionalTitle),
      )
    : undefined,
  sequenceNumber: object.SequenceNumber
    ? parseInt(object.SequenceNumber[0])
    : undefined,
  ...parseDisplaySequenceChoice(object),
  displayArtist: object.DisplayArtist
    ? object.DisplayArtist.map((displayArtist: any) =>
        parseDisplayArtist(displayArtist),
      )
    : undefined,
  carrierType: object.CarrierType
    ? object.CarrierType.map((carrierType: any) =>
        parseCarrierType(carrierType),
      )
    : undefined,
  duration: object.Duration ? parseDuration(object.Duration[0]) : undefined,
  ...parseResourceGroupIdentifierChoice(object),
  resourceGroup: object.ResourceGroup
    ? object.ResourceGroup.map((resourceGroup: any) =>
        parseResourceSubGroup(resourceGroup),
      )
    : undefined,
  resourceGroupContentItem: object.ResourceGroupContentItem
    ? object.ResourceGroupContentItem.map((resourceGroupContentItem: any) =>
        parseResourceGroupContentItem(resourceGroupContentItem),
      )
    : undefined,
  linkedReleaseResourceReference: object.LinkedReleaseResourceReference
    ? object.LinkedReleaseResourceReference.map(
        (linkedReleaseResourceReference: any) =>
          parseLinkedReleaseResourceReference(linkedReleaseResourceReference),
      )
    : undefined,
});
