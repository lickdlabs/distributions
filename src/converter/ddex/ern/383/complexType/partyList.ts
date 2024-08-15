import { Ern383, Ern411 } from "../../../../../types";
import { findUnique } from "../../../../../utils";
import { convertDetailedPartyId } from "./detailedPartyId";

export const convertPartyList = (
  mesageHeader: Ern383.MessageHeader,
  resourceList: Ern383.ResourceList,
  releaseList: Ern383.ReleaseList,
): Ern411.PartyList => {
  const party: Ern411.Party[] = [];

  const convertMessageHeader = (
    messagingParty: Ern383.MessagingParty,
  ): Ern411.Party => ({
    partyReference: `P${party.length}` as Ern411.Party["partyReference"],
    partyName: messagingParty.partyName
      ? [messagingParty.partyName]
      : undefined,
    partyId: messagingParty.partyId.map((partyId) =>
      convertDetailedPartyId(partyId),
    ),
  });

  const convertLabelName = (labelName: Ern383.LabelName): Ern411.Party => ({
    partyReference: `P${party.length}` as Ern411.Party["partyReference"],
    partyName: [
      {
        fullName: {
          value: labelName.value,
        },
      },
    ],
  });

  const convertContributor = (
    contributor: Ern383.DetailedResourceContributor,
  ): Ern411.Party => {
    if (contributor.partyName) {
      return {
        partyReference: `P${party.length}` as Ern411.Party["partyReference"],
        partyName: contributor.partyName,
        partyId: contributor.partyId
          ? contributor.partyId.map((partyId) =>
              convertDetailedPartyId(partyId),
            )
          : undefined,
      };
    }

    return {
      partyReference: `P${party.length}` as Ern411.Party["partyReference"],
      partyId: contributor.partyId.map((partyId) =>
        convertDetailedPartyId(partyId),
      ),
    };
  };

  const convertDisplayArtist = (artist: Ern383.Artist): Ern411.Party => {
    if (artist.partyName) {
      return {
        partyReference: `P${party.length}` as Ern411.Party["partyReference"],
        partyName: artist.partyName,
        partyId: artist.partyId
          ? artist.partyId.map((partyId) => convertDetailedPartyId(partyId))
          : undefined,
      };
    }

    return {
      partyReference: `P${party.length}` as Ern411.Party["partyReference"],
      partyId: artist.partyId.map((partyId) => convertDetailedPartyId(partyId)),
    };
  };

  party.push(convertMessageHeader(mesageHeader.messageSender));

  const labels: Ern383.LabelName[] = [];
  const contributors: Ern383.DetailedResourceContributor[] = [];
  const artists: Ern383.Artist[] = [];

  resourceList.image?.forEach((image) => {
    image.imageDetailsByTerritory.forEach((imageDetailsByTerritory) => {
      imageDetailsByTerritory.resourceContributor?.forEach(
        (resourceContributor) => contributors.push(resourceContributor),
      );
    });
  });

  releaseList.release?.forEach((release) => {
    release.releaseDetailsByTerritory.forEach((releaseDetailsByTerritory) => {
      releaseDetailsByTerritory.labelName?.forEach((labelName) =>
        labels.push(labelName),
      );
      releaseDetailsByTerritory.displayArtist?.forEach((displayArtist) =>
        artists.push(displayArtist),
      );
    });
  });

  findUnique(labels).map((label) => party.push(convertLabelName(label)));
  findUnique(contributors).map((contributor) =>
    party.push(convertContributor(contributor)),
  );
  findUnique(artists).map((artist) => party.push(convertDisplayArtist(artist)));

  return { party };
};
