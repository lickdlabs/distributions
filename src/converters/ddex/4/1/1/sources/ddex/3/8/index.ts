import { ILogger } from "@lickd/logger";
import { EDistroType, TDistro } from "../../../../../../../../../types";
import * as v3 from "../../../../../../../../../types/ddex/3";
import * as v38 from "../../../../../../../../../types/ddex/3/8";
import * as v411 from "../../../../../../../../../types/ddex/4/1/1";
import path from "path";

export class Ddex38 {
  public constructor(private logger: ILogger) {}

  public convertNewReleaseMessage(
    distro: TDistro<EDistroType.DDEX> &
      v3.TDistroDdex<v3.EDistroDdexVersion, v3.EDistroDdexAction.NEW_RELEASE>,
  ): v411.TNewReleaseMessage {
    return {
      messageHeader: this.convertMessageHeader(distro.message.messageHeader),
      resourceList: this.convertResourceList(distro.message.resourceList),
    };
  }

  private convertMessageHeader(distro: v38.TMessageHeader): v411.TMessageHeader {
    return {
      messageId: distro.messageId,
      messageSender: distro.messageSender as v411.TMessageHeader["messageSender"],
      messageRecipient: distro.messageRecipient as v411.TMessageHeader["messageRecipient"],
      messageCreatedDateTime: distro.messageCreatedDateTime,
    }
  }

  private convertResourceList(distro: v38.TResourceList): v411.TResourceList {
    const converted: v411.TResourceList = {};

    if (distro.soundRecording) {
      converted.soundRecording = distro.soundRecording.map((soundRecording) =>
        this.convertSoundRecording(soundRecording),
      );
    }

    if (distro.image) {
      converted.image = distro.image.map((image) => this.convertImage(image));
    }

    return converted;
  }

  private convertSoundRecording(
    distro: v38.TSoundRecording,
  ): v411.TSoundRecording {
    const converted: v411.TSoundRecording = {
      resourceReference: distro.resourceReference,
    };

    const technicalDetails: v411.TTechnicalSoundRecordingDetails[] = [];

    for (const soundRecordingDetailsByTerritory of distro.soundRecordingDetailsByTerritory) {
      for (const technicalSoundRecordingDetails of soundRecordingDetailsByTerritory.technicalSoundRecordingDetails ||
        []) {
        technicalDetails.push(
          this.convertTechnicalSoundRecordingDetails(
            technicalSoundRecordingDetails,
          ),
        );
      }
    }

    if (technicalDetails.length > 0) {
      converted.technicalDetails = technicalDetails;
    }

    return converted;
  }

  private convertTechnicalSoundRecordingDetails(
    distro: v38.TTechnicalSoundRecordingDetails,
  ): v411.TTechnicalSoundRecordingDetails {
    const converted: v411.TTechnicalSoundRecordingDetails = {
      technicalResourceDetailsReference:
        distro.technicalResourceDetailsReference,
    };

    if (distro.file) {
      if (distro.file.length > 1) {
        throw new Error();
      }

      converted.file = this.convertFile(distro.file[0]);
    }

    return converted;
  }

  private convertImage(distro: v38.TImage): v411.TImage {
    const converted: v411.TImage = {
      resourceReference: distro.resourceReference,
    };

    const technicalDetails: v411.TTechnicalImageDetails[] = [];

    for (const imageDetailsByTerritory of distro.imageDetailsByTerritory) {
      for (const technicalImageDetails of imageDetailsByTerritory.technicalImageDetails ||
        []) {
        technicalDetails.push(
          this.convertImageTechnicalImageDetails(technicalImageDetails),
        );
      }
    }

    if (technicalDetails.length > 0) {
      converted.technicalDetails = technicalDetails;
    }

    return converted;
  }

  private convertImageTechnicalImageDetails(
    distro: v38.TTechnicalImageDetails,
  ): v411.TTechnicalImageDetails {
    const converted: v411.TTechnicalSoundRecordingDetails = {
      technicalResourceDetailsReference:
        distro.technicalResourceDetailsReference,
    };

    if (distro.file) {
      if (distro.file.length > 1) {
        throw new Error();
      }

      converted.file = this.convertFile(distro.file[0]);
    }

    return converted;
  }

  private convertFile(distro: v38.TFile): v411.TFile {
    const converted: v411.TFile = {
      uri:
        "fileName" in distro
          ? path.join(distro.filePath || "", distro.fileName)
          : distro.url,
    };

    if (distro.hashSum) {
      converted.hashSum = {
        algorithm: distro.hashSum.hashSumAlgorithmType,
        hashSumValue: distro.hashSum.hashSum,
        dataType: distro.hashSum.hashSumDataType,
      };
    }

    return converted;
  }
}
