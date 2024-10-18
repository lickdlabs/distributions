import { ConverterError } from "../../../../../errors";
import { Ern383, Ern411, ErnVersions } from "../../../../../types";
import { findUnique } from "../../../../../utils";
import { convertDetailedPartyId } from "./detailedPartyId";

export const convertPartyList = (
  mesageHeader: Ern383.MessageHeader,
  resourceList: Ern383.ResourceList,
  releaseList: Ern383.ReleaseList,
): Ern411.PartyList => {
  const partyChoice: Ern411.PartyChoice[] = [
    convertMessageHeader(mesageHeader.messageSender),
  ];

  if (mesageHeader.sentOnBehalfOf) {
    partyChoice.push(convertMessageHeader(mesageHeader.sentOnBehalfOf));
  }

  releaseList.release?.forEach((release) => {
    release.releaseDetailsByTerritory.forEach((releaseDetailsByTerritory) => {
      releaseDetailsByTerritory.labelName?.forEach((labelName) =>
        partyChoice.push(convertLabelName(labelName)),
      );

      releaseDetailsByTerritory.displayArtist?.forEach((displayArtist) =>
        partyChoice.push(convertParty(displayArtist)),
      );
    });
  });

  resourceList.soundRecording?.forEach((soundRecording) => {
    soundRecording.soundRecordingDetailsByTerritory.forEach(
      (soundRecordingDetailsByTerritory) => {
        soundRecordingDetailsByTerritory.displayArtist?.forEach(
          (displayArtist) => partyChoice.push(convertParty(displayArtist)),
        );

        soundRecordingDetailsByTerritory.resourceContributor?.forEach(
          (resourceContributor) =>
            partyChoice.push(convertParty(resourceContributor)),
        );

        soundRecordingDetailsByTerritory.indirectResourceContributor?.forEach(
          (indirectResourceContributor) =>
            partyChoice.push(convertParty(indirectResourceContributor)),
        );

        soundRecordingDetailsByTerritory.rightsController?.forEach(
          (rightsController) =>
            partyChoice.push(convertParty(rightsController)),
        );
      },
    );
  });

  resourceList.image?.forEach((image) => {
    image.imageDetailsByTerritory.forEach((imageDetailsByTerritory) => {
      imageDetailsByTerritory.resourceContributor?.forEach(
        (resourceContributor) =>
          partyChoice.push(convertParty(resourceContributor)),
      );

      imageDetailsByTerritory.indirectResourceContributor?.forEach(
        (indirectResourceContributor) =>
          partyChoice.push(convertParty(indirectResourceContributor)),
      );
    });
  });

  return {
    party: findUnique(partyChoice).map(
      (partyChoice, index): Ern411.Party => ({
        partyReference: `P${index}` as Ern411.Party["partyReference"],
        ...partyChoice,
      }),
    ),
  };
};

const convertMessageHeader = (
  messagingParty: Ern383.MessagingParty,
): Ern411.PartyChoice => ({
  partyName: messagingParty.partyName ? [messagingParty.partyName] : undefined,
  partyId: messagingParty.partyId.map((partyId) =>
    convertDetailedPartyId(partyId),
  ),
});

const convertLabelName = (labelName: Ern383.LabelName): Ern411.PartyChoice => ({
  partyName: [
    {
      fullName: {
        value: labelName.value,
      },
    },
  ],
});

const convertParty = (
  party: Partial<Ern383.PartyChoice>,
): Ern411.PartyChoice => {
  if (party.partyName) {
    return {
      partyName: party.partyName,
      partyId: party.partyId
        ? party.partyId.map((partyId) => convertDetailedPartyId(partyId))
        : undefined,
    };
  }

  if (party.partyId) {
    return {
      partyId: party.partyId.map((partyId) => convertDetailedPartyId(partyId)),
    };
  }

  throw new ConverterError({
    version: ErnVersions.ERN_383,
    message: "could not detect party",
  });
};
