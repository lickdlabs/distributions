import { ILogger } from "@lickd/logger";
import path from "path";
import { Avs411, Ern382, Ern411 } from "../../../../../types";

export abstract class AbstractConverter {
  public constructor(protected logger: ILogger) {}

  protected convertDetailedHashSum(
    ern: Ern382.HashSum,
  ): Ern411.DetailedHashSum {
    return {
      algorithm: {
        value:
          ern.hashSumAlgorithmType as unknown as Avs411.HashSumAlgorithmType,
      },
      dataType: ern.hashSumDataType as unknown as Avs411.BinaryDataType,
      hashSumValue: ern.hashSum,
    };
  }

  protected convertFile(ern: Ern382.File): Ern411.File {
    if (ern.url) {
      return {
        uri: ern.url,
        hashSum: ern.hashSum
          ? this.convertDetailedHashSum(ern.hashSum)
          : undefined,
      };
    }

    return {
      uri: path.join(ern.filePath || "", ern.fileName || ""),
      hashSum: ern.hashSum
        ? this.convertDetailedHashSum(ern.hashSum)
        : undefined,
    };
  }

  protected convertImage(ern: Ern382.Image): Ern411.Image {
    if (ern.imageDetailsByTerritory.length > 1) {
      this.logger.warn(
        "image has more than one territory entry, only first entry is used",
      );
    }

    const territory = ern.imageDetailsByTerritory[0];
    const attributes = {
      languageAndScriptCode: ern._attributes?.languageAndScriptCode,
    };

    return {
      _attributes: ern._attributes ? attributes : undefined,
      resourceReference: ern.resourceReference,
      type: {
        value: Avs411.ImageType.UNKNOWN,
      },
      resourceId: ern.imageId,
      technicalDetails: territory.technicalImageDetails
        ? territory.technicalImageDetails.map((technicalImageDetails) =>
            this.convertTechnicalImageDetails(technicalImageDetails),
          )
        : undefined,
    };
  }

  protected convertMessageAuditTrail(
    ern: Ern382.MessageAuditTrail,
  ): Ern411.MessageAuditTrail {
    return {
      messageAuditTrailEvent: ern.messageAuditTrailEvent.map(
        (messageAuditTrailEvent) =>
          this.convertMessageAuditTrailEvent(messageAuditTrailEvent),
      ),
    };
  }

  protected convertMessageAuditTrailEvent(
    ern: Ern382.MessageAuditTrailEvent,
  ): Ern411.MessageAuditTrailEvent {
    return {
      messagingPartyDescriptor: this.convertMessagingPartyWithoutCode(
        ern.messagingPartyDescriptor,
      ),
      dateTime: ern.dateTime,
    };
  }

  protected convertMessageHeader(
    ern: Ern382.MessageHeader,
  ): Ern411.MessageHeader {
    return {
      messageThreadId: ern.messageThreadId,
      messageId: ern.messageId,
      messageFileName: ern.messageFileName,
      messageSender: this.convertMessagingPartyWithoutCode(ern.messageSender),
      sentOnBehalfOf: ern.sentOnBehalfOf
        ? this.convertMessagingPartyWithoutCode(ern.sentOnBehalfOf)
        : undefined,
      messageRecipient: ern.messageRecipient.map((messageRecipient) =>
        this.convertMessagingPartyWithoutCode(messageRecipient),
      ),
      messageCreatedDateTime: ern.messageCreatedDateTime,
      messageAuditTrail: ern.messageAuditTrail
        ? this.convertMessageAuditTrail(ern.messageAuditTrail)
        : undefined,
      messageControlType: ern.messageControlType,
    };
  }

  protected convertMessagingPartyWithoutCode(
    ern: Ern382.MessagingParty,
  ): Ern411.MessagingPartyWithoutCode {
    if (ern.partyId.length > 1) {
      this.logger.warn(
        "party id has more than one entry, only first entry is used",
      );
    }

    return {
      partyId: ern.partyId[0]
        .value as Ern411.MessagingPartyWithoutCode["partyId"],
      partyName: ern.partyName
        ? this.convertPartyNameWithoutCode(ern.partyName)
        : undefined,
      tradingName: ern.tradingName?.value,
    };
  }

  protected convertPartyNameWithoutCode(
    ern: Ern382.PartyName,
  ): Ern411.PartyNameWithoutCode {
    return {
      fullName: ern.fullName.value,
      fullNameAsciiTranscribed: ern.fullNameAsciiTranscribed,
      fullNameIndexed: ern.fullNameIndexed?.value,
      namesBeforeKeyName: ern.namesBeforeKeyName?.value,
      keyName: ern.keyName?.value,
      namesAfterKeyName: ern.namesAfterKeyName?.value,
      abbreviatedName: ern.abbreviatedName?.value,
    };
  }

  protected convertResourceList(ern: Ern382.ResourceList): Ern411.ResourceList {
    return {
      soundRecording: ern.soundRecording
        ? ern.soundRecording.map((soundRecording) =>
            this.convertSoundRecording(soundRecording),
          )
        : undefined,
      image: ern.image
        ? ern.image.map((image) => this.convertImage(image))
        : undefined,
    };
  }

  protected convertSoundRecording(
    ern: Ern382.SoundRecording,
  ): Ern411.SoundRecording {
    if (ern.soundRecordingDetailsByTerritory.length > 1) {
      this.logger.warn(
        "sound recording has more than one territory entry, only first entry is used",
      );
    }

    const territory = ern.soundRecordingDetailsByTerritory[0];
    const attributes = {
      languageAndScriptCode: ern._attributes?.languageAndScriptCode,
    };

    return {
      _attributes: ern._attributes ? attributes : undefined,
      resourceReference: ern.resourceReference,
      type: {
        value: Avs411.SoundRecordingType.UNKNOWN,
      },
      resourceId: ern.soundRecordingId,
      displayTitleText: [
        {
          value: ern.referenceTitle.titleText.value,
        },
      ],
      displayTitle: [
        {
          titleText: ern.referenceTitle.titleText.value,
        },
      ],
      displayArtistName: [],
      displayArtist: [],
      duration: ern.duration,
      parentalWarningType: [
        {
          value: Avs411.ParentalWarningType.UNKNOWN,
        },
      ],
      technicalDetails: territory.technicalSoundRecordingDetails
        ? territory.technicalSoundRecordingDetails.map(
            (technicalSoundRecordingDetails) =>
              this.convertTechnicalSoundRecordingDetails(
                technicalSoundRecordingDetails,
              ),
          )
        : undefined,
    };
  }

  protected convertTechnicalImageDetails(
    ern: Ern382.TechnicalImageDetails,
  ): Ern411.TechnicalImageDetails {
    if ((ern.file?.length || 0) > 1) {
      this.logger.warn(
        "technical sound recording details has more than one file entry, only first entry is used",
      );
    }

    const attributes = {
      languageAndScriptCode: ern._attributes?.languageAndScriptCode,
    };

    return {
      _attributes: ern._attributes ? attributes : undefined,
      technicalResourceDetailsReference: ern.technicalResourceDetailsReference,
      file: ern.file ? this.convertFile(ern.file[0]) : undefined,
    };
  }

  protected convertTechnicalSoundRecordingDetails(
    ern: Ern382.TechnicalSoundRecordingDetails,
  ): Ern411.TechnicalSoundRecordingDetails {
    if ((ern.file?.length || 0) > 1) {
      this.logger.warn(
        "technical sound recording details has more than one file entry, only first entry is used",
      );
    }

    const attributes = {
      languageAndScriptCode: ern._attributes?.languageAndScriptCode,
    };

    return {
      _attributes: ern._attributes ? attributes : undefined,
      technicalResourceDetailsReference: ern.technicalResourceDetailsReference,
      file: ern.file ? this.convertFile(ern.file[0]) : undefined,
    };
  }
}
