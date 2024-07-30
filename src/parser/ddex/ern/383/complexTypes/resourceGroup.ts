import { Ern383 } from "../../../../../types";
import { parseArtist } from "./artist";
import { parseCarrierType } from "./carrierType";
import { parseDetailedResourceContributor } from "./detailedResourceContributor";
import { parseExtendedResourceGroupContentItem } from "./extendedResourceGroupContentItem";
import { parseIndirectResourceContributor } from "./indirectResourceContributor";
import { parseReleaseId } from "./releaseId";
import { parseResourceGroupResourceReferenceList } from "./resourceGroupResourceReferenceList";
import { parseTitle } from "./title";

export const parseResourceGroup = (object: any): Ern383.ResourceGroup => {
  const attributes = {
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    title: object.Title
      ? object.Title.map((title: any) => parseTitle(title))
      : undefined,
    sequenceNumber: object.SequenceNumber
      ? parseInt(object.SequenceNumber[0])
      : undefined,
    displayArtist: object.DisplayArtist
      ? object.DisplayArtist.map((displayArtist: any) =>
          parseArtist(displayArtist),
        )
      : undefined,
    displayConductor: object.DisplayConductor
      ? object.DisplayConductor.map((displayConductor: any) =>
          parseArtist(displayConductor),
        )
      : undefined,
    displayComposer: object.DisplayComposer
      ? object.DisplayComposer.map((displayComposer: any) =>
          parseArtist(displayComposer),
        )
      : undefined,
    resourceContributor: object.ResourceContributor
      ? object.ResourceContributor.map((resourceContributor: any) =>
          parseDetailedResourceContributor(resourceContributor),
        )
      : undefined,
    indirectResourceContributor: object.IndirectResourceContributor
      ? object.IndirectResourceContributor.map(
          (indirectResourceContributor: any) =>
            parseIndirectResourceContributor(indirectResourceContributor),
        )
      : undefined,
    carrierType: object.CarrierType
      ? object.CarrierType.map((carrierType: any) =>
          parseCarrierType(carrierType),
        )
      : undefined,
    resourceGroup: object.ResourceGroup
      ? object.ResourceGroup.map((resourceGroup: any) =>
          parseResourceGroup(resourceGroup),
        )
      : undefined,
    ...parseResourceGroupContentChoice(object),
    ...parseResourceGroupIdentifierChoice(object),
  };
};

const parseResourceGroupContentChoice = (
  object: any,
): Partial<Ern383.ResourceGroupContentChoice> => {
  if (object.ResourceGroupContentItem) {
    return {
      resourceGroupContentItem: object.ResourceGroupContentItem.map(
        (resourceGroupContentItem: any) =>
          parseExtendedResourceGroupContentItem(resourceGroupContentItem),
      ),
    };
  }

  if (object.ResourceGroupResourceReferenceList) {
    return {
      resourceGroupResourceReferenceList:
        parseResourceGroupResourceReferenceList(
          object.ResourceGroupResourceReferenceList[0],
        ),
    };
  }

  return {};
};

const parseResourceGroupIdentifierChoice = (
  object: any,
): Partial<Ern383.ResourceGroupIdentifierChoice> => {
  if (object.ResourceGroupReleaseReference) {
    return {
      resourceGroupReleaseReference: object.ResourceGroupReleaseReference[0],
    };
  }

  if (object.ReleaseId) {
    return {
      releaseId: parseReleaseId(object.ReleaseId[0]),
    };
  }

  return {};
};
