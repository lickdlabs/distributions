import { Ern383, Ern411 } from "../../../../../types";
import { findUnique } from "../../../../../utils";
import { convertDetailedPartyId } from "./detailedPartyId";

export const convertPartyList = (
  mesageHeader: Ern383.MessageHeader,
  releases?: Ern383.Release[],
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
  const artists: Ern383.Artist[] = [];

  releases?.forEach((release) => {
    release.releaseDetailsByTerritory.forEach((releaseDetailsByTerritory) => {
      releaseDetailsByTerritory.labelName?.forEach((labelName) =>
        labels.push(labelName),
      );
      releaseDetailsByTerritory.displayArtist?.forEach((displayArtist) =>
        artists.push(displayArtist),
      );
    });
  });

  findUnique(labels).map((labels) => party.push(convertLabelName(labels)));
  findUnique(artists).map((artist) => party.push(convertDisplayArtist(artist)));

  return { party };
};
