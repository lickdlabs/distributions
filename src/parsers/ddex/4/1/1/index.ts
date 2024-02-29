import { ILogger } from "@lickd/logger";
import * as v411 from "../../../../../types/ddex/4/1/1";

export class Ddex411 {
  public constructor(private logger: ILogger) {}

  public parseNewReleaseMessage(object: any): v411.TNewReleaseMessage {
    return {
      resourceList: this.parseResourceList(object.ResourceList[0]),
    };
  }

  private parseResourceList(object: any): v411.TResourceList {
    const parsed: v411.TResourceList = {};

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

  private parseSoundRecording(object: any): v411.TSoundRecording {
    return {
      resourceReference: object.ResourceReference[0],
      technicalDetails: object.TechnicalDetails.map((technicalDetails: any) =>
        this.parseTechnicalSoundRecordingDetails(technicalDetails),
      ),
    };
  }

  private parseTechnicalSoundRecordingDetails(
    object: any,
  ): v411.TTechnicalSoundRecordingDetails {
    return {
      technicalResourceDetailsReference:
        object.TechnicalResourceDetailsReference[0],
      file: this.parseFile(object.File[0]),
    };
  }

  private parseImage(object: any): v411.TImage {
    return {
      resourceReference: object.ResourceReference[0],
      technicalDetails: object.TechnicalDetails.map((technicalDetails: any) =>
        this.parseTechnicalImageDetails(technicalDetails),
      ),
    };
  }

  private parseTechnicalImageDetails(object: any): v411.TTechnicalImageDetails {
    return {
      file: this.parseFile(object.File[0]),
    };
  }

  private parseFile(object: any): v411.TFile {
    const parsed: v411.TFile = {
      uri: object.URI[0],
    };

    if (object.HashSum) {
      parsed.hashSum = {
        algorithm: (object.HashSum[0].Algorithm[0] as string).toLowerCase(),
        version: object.HashSum[0].Version
          ? object.HashSum[0].Version[0]
          : undefined,
        parameter: object.HashSum[0].Parameter
          ? object.HashSum[0].Parameter[0]
          : undefined,
        dataType: object.HashSum[0].DataType
          ? object.HashSum[0].DataType[0]
          : undefined,
        hashSumValue: (
          object.HashSum[0].HashSumValue[0] as string
        ).toLowerCase(),
      };
    }

    if (object.FileSize) {
      parsed.fileSize = parseFloat(object.FileSize[0]);
    }

    return parsed;
  }
}
