import path from "path";
import { Avs411, Ern383, Ern411 } from "../../../../../types";
import { AbstractConverter } from "./abstract";

export class NewReleaseMessageConverter extends AbstractConverter {
  public convert(
    ern: Ern383.ErnNewReleaseMessage,
  ): Ern411.ErnNewReleaseMessage {
    return {
      type: "ddex",
      version: 411,
      action: Ern411.Actions.NEW_RELEASE_MESSAGE,
      element: {
        _attributes: {
          languageAndScriptCode:
            ern.element._attributes.languageAndScriptCode || "en",
        },
        messageHeader: this.convertMessageHeader(ern.element.messageHeader),
        resourceList: this.convertResourceList(ern.element.resourceList),
      },
    };
  }

  private convertDetailedHashSum(ern: Ern383.HashSum): Ern411.DetailedHashSum {
    return {
      algorithm: {
        value:
          ern.hashSumAlgorithmType as unknown as Avs411.HashSumAlgorithmType,
      },
      dataType: ern.hashSumDataType as unknown as Avs411.BinaryDataType,
      hashSumValue: ern.hashSum,
    };
  }

  private convertFile(ern: Ern383.File): Ern411.File {
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

  private convertImage(ern: Ern383.Image): Ern411.Image {
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

  private convertResourceList(ern: Ern383.ResourceList): Ern411.ResourceList {
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

  private convertSoundRecording(
    ern: Ern383.SoundRecording,
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

  private convertTechnicalImageDetails(
    ern: Ern383.TechnicalImageDetails,
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
      // @todo <xs:element name="ImageCodecType" minOccurs="0" type="ern:ImageCodecType" />
      // @todo <xs:element name="ImageHeight" minOccurs="0" type="ern:Extent" />
      // @todo <xs:element name="ImageWidth" minOccurs="0" type="ern:Extent" />
      // @todo <xs:element name="AspectRatio" minOccurs="0" type="ern:AspectRatio" />
      colorDepth: ern.colorDepth,
      imageResolution: ern.imageResolution,
      isPreview: ern.isPreview,
      // @todo <xs:element name="PreviewDetails" minOccurs="0" type="ern:PreviewDetails" />
      // @todo <xs:element name="File" minOccurs="0" type="ern:File" />
      file: ern.file ? this.convertFile(ern.file[0]) : undefined,
      // @todo <xs:element name="Fingerprint" minOccurs="0" maxOccurs="unbounded" type="ern:Fingerprint" />
    };
  }

  private convertTechnicalSoundRecordingDetails(
    ern: Ern383.TechnicalSoundRecordingDetails,
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
      // @todo <xs:element name="AudioCodecType" minOccurs="0" type="ern:AudioCodecType" />
      // @todo <xs:element name="BitRate" minOccurs="0" type="ern:BitRate" />
      // @todo <xs:element name="OriginalBitRate" minOccurs="0" type="ern:BitRate" />
      numberOfChannels: ern.numberOfChannels,
      // @todo <xs:element name="SamplingRate" minOccurs="0" type="ern:SamplingRate" />
      // @todo <xs:element name="OriginalSamplingRate" minOccurs="0" type="ern:SamplingRate" />
      bitsPerSample: ern.bitsPerSample,
      duration: ern.duration,
      isPreview: ern.isPreview,
      // @todo <xs:element name="PreviewDetails" minOccurs="0" type="ern:SoundRecordingPreviewDetails" />
      file: ern.file ? this.convertFile(ern.file[0]) : undefined,
      // @todo <xs:element name="Fingerprint" minOccurs="0" maxOccurs="unbounded" type="ern:Fingerprint" />
    };
  }
}
