import { ILogger } from "@lickd/logger";
import * as v38 from "../../../../types/ddex/3/8";

export class Ddex38 {
  public constructor(private logger: ILogger) {}

  public parseNewReleaseMessage(object: any): v38.TNewReleaseMessage {
    return {
      messageHeader: this.parseMessageHeader(object.MessageHeader[0]),
      resourceList: this.parseResourceList(object.ResourceList[0]),
    };
  }

  private parseMessageHeader(object: any): v38.TMessageHeader {
    return {
      messageId: object.MessageId[0],
      messageSender: {
        partyId: object.MessageSender[0].PartyId[0],
        partyName: object.MessageSender[0].PartyName[0]
          ? {
              fullName: object.MessageSender[0].PartyName[0].FullName[0],
            }
          : undefined,
      },
      messageRecipient: {
        partyId: object.MessageRecipient[0].PartyId[0],
        partyName: object.MessageRecipient[0].PartyName[0]
          ? {
              fullName: object.MessageRecipient[0].PartyName[0].FullName[0],
            }
          : undefined,
      },
      messageCreatedDateTime: new Date(object.MessageCreatedDateTime[0]),
    };
  }

  private parseResourceList(object: any): v38.TResourceList {
    const parsed: v38.TResourceList = {};

    if (object.SoundRecording) {
      parsed.soundRecording = object.SoundRecording.map((soundRecording: any) =>
        this.parseSoundRecording(soundRecording),
      );
    }

    if (object.Image) {
      parsed.image = object.Image.map((image: any) => this.parseImage(image));
    }

    return parsed;
  }

  private parseSoundRecording(object: any): v38.TSoundRecording {
    return {
      resourceReference: object.ResourceReference[0],
      soundRecordingDetailsByTerritory:
        object.SoundRecordingDetailsByTerritory.map(
          (soundRecordingDetailsByTerritory: any) =>
            this.parseSoundRecordingDetailsByTerritory(
              soundRecordingDetailsByTerritory,
            ),
        ),
    };
  }

  private parseSoundRecordingDetailsByTerritory(
    object: any,
  ): v38.TSoundRecordingDetailsByTerritory {
    const parsed: v38.TSoundRecordingDetailsByTerritory = {};

    if (object.TechnicalSoundRecordingDetails) {
      parsed.technicalSoundRecordingDetails =
        object.TechnicalSoundRecordingDetails.map(
          (technicalSoundRecordingDetails: any) =>
            this.parseTechnicalSoundRecordingDetails(
              technicalSoundRecordingDetails,
            ),
        );
    }

    return parsed;
  }

  private parseTechnicalSoundRecordingDetails(
    object: any,
  ): v38.TTechnicalSoundRecordingDetails {
    return {
      technicalResourceDetailsReference:
        object.TechnicalResourceDetailsReference[0],
      file: object.File.map((file: any) => this.parseFile(file)),
    };
  }

  private parseImage(object: any): v38.TImage {
    return {
      resourceReference: object.ResourceReference[0],
      imageDetailsByTerritory: object.ImageDetailsByTerritory.map(
        (imageDetailsByTerritory: any) =>
          this.parseImageDetailsByTerritory(imageDetailsByTerritory),
      ),
    };
  }

  private parseImageDetailsByTerritory(
    object: any,
  ): v38.TImageDetailsByTerritory {
    const parsed: v38.TImageDetailsByTerritory = {};

    if (object.TechnicalImageDetails) {
      parsed.technicalImageDetails = object.TechnicalImageDetails.map(
        (technicalImageDetails: any) =>
          this.parseTechnicalImageDetails(technicalImageDetails),
      );
    }

    return parsed;
  }

  private parseTechnicalImageDetails(object: any): v38.TTechnicalImageDetails {
    return {
      technicalResourceDetailsReference:
        object.TechnicalResourceDetailsReference[0],
      file: object.File.map((file: any) => this.parseFile(file)),
    };
  }

  private parseFile(object: any): v38.TFile {
    const parsed: v38.TFile = object.FileName
      ? this.parseFileName(object)
      : this.parseFileUrl(object);

    if (object.HashSum) {
      parsed.hashSum = {
        hashSum: object.HashSum[0].HashSum[0],
        hashSumAlgorithmType: object.HashSum[0].HashSumAlgorithmType[0],
        hashSumDataType: object.HashSum[0].HashSumDataType
          ? object.HashSum[0].HashSumDataType[0]
          : undefined,
      };
    }

    return parsed;
  }

  private parseFileName(object: any): v38.TFileName {
    return {
      fileName: object.FileName[0],
      filePath: object.FilePath ? object.FilePath[0] : undefined,
    };
  }

  private parseFileUrl(object: any): v38.TFileUrl {
    return {
      url: object.URL[0],
    };
  }
}
