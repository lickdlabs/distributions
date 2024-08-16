import { Ern383, Ern411 } from "../../../../../types";
import { findUnique } from "../../../../../utils";
import { convertDetailedPartyId } from "./detailedPartyId";

export const convertPartyList = (
  mesageHeader: Ern383.MessageHeader,
  resourceList: Ern383.ResourceList,
  releaseList: Ern383.ReleaseList,
): Ern411.PartyList => {
  const partyList: Ern411.PartyList = { party: [] };

  const convertMessageHeader = (
    messagingParty: Ern383.MessagingParty,
  ): Ern411.Party => ({
    partyReference:
      `P${partyList.party.length}` as Ern411.Party["partyReference"],
    partyName: messagingParty.partyName
      ? [messagingParty.partyName]
      : undefined,
    partyId: messagingParty.partyId.map((partyId) =>
      convertDetailedPartyId(partyId),
    ),
  });

  const convertLabelName = (labelName: Ern383.LabelName): Ern411.Party => ({
    partyReference:
      `P${partyList.party.length}` as Ern411.Party["partyReference"],
    partyName: [
      {
        fullName: {
          value: labelName.value,
        },
      },
    ],
  });

  const convertParty = (party: Partial<Ern383.PartyChoice>): Ern411.Party => {
    if (party.partyName) {
      return {
        partyReference:
          `P${partyList.party.length}` as Ern411.Party["partyReference"],
        partyName: party.partyName,
        partyId: party.partyId
          ? party.partyId.map((partyId) => convertDetailedPartyId(partyId))
          : undefined,
      };
    }

    if (party.partyId) {
      return {
        partyReference:
          `P${partyList.party.length}` as Ern411.Party["partyReference"],
        partyId: party.partyId.map((partyId) =>
          convertDetailedPartyId(partyId),
        ),
      };
    }

    throw new Error("could not detect party");
  };

  partyList.party.push(convertMessageHeader(mesageHeader.messageSender));

  const labels: Ern383.LabelName[] = [];
  const parties: Partial<Ern383.PartyChoice>[] = [];

  resourceList.soundRecording?.forEach((soundRecording) => {
    soundRecording.soundRecordingDetailsByTerritory.forEach(
      (soundRecordingDetailsByTerritory) => {
        soundRecordingDetailsByTerritory.resourceContributor?.forEach(
          (resourceContributor) =>
            parties.push({
              partyId: resourceContributor.partyId,
              partyName: resourceContributor.partyName,
            }),
        );

        soundRecordingDetailsByTerritory.indirectResourceContributor?.forEach(
          (indirectResourceContributor) =>
            parties.push({
              partyId: indirectResourceContributor.partyId,
              partyName: indirectResourceContributor.partyName,
            }),
        );

        soundRecordingDetailsByTerritory.rightsController?.forEach(
          (rightsController) =>
            parties.push({
              partyId: rightsController.partyId,
              partyName: rightsController.partyName,
            }),
        );
      },
    );
  });

  resourceList.image?.forEach((image) => {
    image.imageDetailsByTerritory.forEach((imageDetailsByTerritory) => {
      imageDetailsByTerritory.resourceContributor?.forEach(
        (resourceContributor) =>
          parties.push({
            partyId: resourceContributor.partyId,
            partyName: resourceContributor.partyName,
          }),
      );
    });
  });

  releaseList.release?.forEach((release) => {
    release.releaseDetailsByTerritory.forEach((releaseDetailsByTerritory) => {
      releaseDetailsByTerritory.labelName?.forEach((labelName) =>
        labels.push(labelName),
      );
      releaseDetailsByTerritory.displayArtist?.forEach((displayArtist) =>
        parties.push({
          partyId: displayArtist.partyId,
          partyName: displayArtist.partyName,
        }),
      );
    });
  });

  findUnique(labels).map((label) =>
    partyList.party.push(convertLabelName(label)),
  );
  findUnique(parties).map((party) => partyList.party.push(convertParty(party)));

  return partyList;
};
