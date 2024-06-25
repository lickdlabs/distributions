import { Ern383 } from "../../../../types";
import { convertDurationToMilliseconds } from "../../../../utils";
import { AbstractParser } from "./abstract";

export class NewReleaseMessageParser extends AbstractParser {
  public parse(object: any): Ern383.ErnNewReleaseMessage {
    return {
      type: "ddex",
      version: 383,
      action: Ern383.Actions.NEW_RELEASE_MESSAGE,
      element: {
        _attributes: {
          messageSchemaVersionId: object.$.MessageSchemaVersionId,
          businessProfileVersionId:
            object.$.BusinessProfileVersionId || undefined,
          releaseProfileVersionId:
            object.$.ReleaseProfileVersionId || undefined,
          languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
        },
        messageHeader: this.parseMessageHeader(object.MessageHeader[0]),
        updateIndicator: object.UpdateIndicator
          ? object.UpdateIndicator[0]
          : undefined,
        isBackfill: object.IsBackfill
          ? object.IsBackfill[0] === "true"
          : undefined,
        resourceList: this.parseResourceList(object.ResourceList[0]),
      },
    };
  }

  private parseCatalogNumber(object: any): Ern383.CatalogNumber {
    return {
      _attributes: {
        namespace: object.$.Namespace,
      },
      value: object._,
    };
  }

  private parseCurrentTerritoryCode(object: any): Ern383.CurrentTerritoryCode {
    const attributes = {
      identifierType: object.$?.IdentifierType || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  private parseDescription(object: any): Ern383.Description {
    const attributes = {
      languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  private parseFile(object: any): Ern383.File {
    if (object.FileName) {
      return {
        fileName: object.FileName[0],
        filePath: object.FilePath ? object.FilePath[0] : undefined,
        hashSum: object.HashSum
          ? this.parseHashSum(object.HashSum[0])
          : undefined,
      };
    }

    return {
      url: object.URL[0],
      hashSum: object.HashSum
        ? this.parseHashSum(object.HashSum[0])
        : undefined,
    };
  }

  private parseHashSum(object: any): Ern383.HashSum {
    return {
      hashSum: object.HashSum[0],
      hashSumAlgorithmType: object.HashSumAlgorithmType[0],
      hashSumDataType: object.HashSumDataType
        ? object.HashSumDataType[0]
        : undefined,
    };
  }

  private parseImage(object: any): Ern383.Image {
    return {
      imageId: object.ImageId.map((imageId: any) =>
        this.parseResourceProprietaryId(imageId),
      ),
      resourceReference: object.ResourceReference[0],
      imageDetailsByTerritory: object.ImageDetailsByTerritory.map(
        (imageDetailsByTerritory: any) =>
          this.parseImageDetailsByTerritory(imageDetailsByTerritory),
      ),
    };
  }

  private parseImageDetailsByTerritory(
    object: any,
  ): Ern383.ImageDetailsByTerritory {
    const attributes = {
      languageAndScriptCode: object.$?.languageAndScriptCode || undefined,
    };

    const parsed: Omit<
      Ern383.ImageDetailsByTerritory,
      "territoryCode" | "excludedTerritoryCode"
    > = {
      _attributes: object.$ ? attributes : undefined,
      technicalImageDetails: object.TechnicalImageDetails
        ? object.TechnicalImageDetails.map((technicalImageDetails: any) =>
            this.parseTechnicalImageDetails(technicalImageDetails),
          )
        : undefined,
    };

    if (object.TerritoryCode) {
      return {
        ...parsed,
        territoryCode: object.TerritoryCode.map((territoryCode: any) =>
          this.parseCurrentTerritoryCode(territoryCode),
        ),
      };
    }

    return {
      ...parsed,
      excludedTerritoryCode: object.ExcludedTerritoryCode.map(
        (excludedTerritoryCode: any) =>
          this.parseCurrentTerritoryCode(excludedTerritoryCode),
      ),
    };
  }

  private parseProprietaryId(object: any): Ern383.ProprietaryId {
    return {
      _attributes: {
        namespace: object.$.Namespace,
      },
      value: object._,
    };
  }

  private parseReferenceTitle(object: any): Ern383.ReferenceTitle {
    const attributes = {
      languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      titleText: this.parseTitleText(object.TitleText[0]),
      subTitle: object.SubTitle
        ? this.parseSubTitle(object.SubTitle[0])
        : undefined,
    };
  }

  private parseResourceList(object: any): Ern383.ResourceList {
    const attributes = {
      languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      soundRecording: object.SoundRecording
        ? object.SoundRecording.map((soundRecording: any) =>
            this.parseSoundRecording(soundRecording),
          )
        : undefined,
      image: object.Image
        ? object.Image.map((image: any) => this.parseImage(image))
        : undefined,
    };
  }

  private parseResourceProprietaryId(
    object: any,
  ): Ern383.ResourceProprietaryId {
    const attributes = {
      isReplaced: object.$?.IsReplaced
        ? object.$.IsReplaced === "true"
        : undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      proprietaryId: object.ProprietaryId.map((proprietaryId: any) =>
        this.parseProprietaryId(proprietaryId),
      ),
    };
  }

  private parseSoundRecording(object: any): Ern383.SoundRecording {
    return {
      soundRecordingId: object.SoundRecordingId.map((soundRecordingId: any) =>
        this.parseSoundRecordingId(soundRecordingId),
      ),
      resourceReference: object.ResourceReference[0],
      referenceTitle: this.parseReferenceTitle(object.ReferenceTitle[0]),
      duration: convertDurationToMilliseconds(object.Duration[0]),
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
  ): Ern383.SoundRecordingDetailsByTerritory {
    const attributes = {
      languageAndScriptCode: object.$?.languageAndScriptCode || undefined,
    };

    const parsed: Omit<
      Ern383.SoundRecordingDetailsByTerritory,
      "territoryCode" | "excludedTerritoryCode"
    > = {
      _attributes: object.$ ? attributes : undefined,
      technicalSoundRecordingDetails: object.TechnicalSoundRecordingDetails
        ? object.TechnicalSoundRecordingDetails.map(
            (technicalSoundRecordingDetails: any) =>
              this.parseTechnicalSoundRecordingDetails(
                technicalSoundRecordingDetails,
              ),
          )
        : undefined,
    };

    if (object.TerritoryCode) {
      return {
        ...parsed,
        territoryCode: object.TerritoryCode.map((territoryCode: any) =>
          this.parseCurrentTerritoryCode(territoryCode),
        ),
      };
    }

    return {
      ...parsed,
      excludedTerritoryCode: object.ExcludedTerritoryCode.map(
        (excludedTerritoryCode: any) =>
          this.parseCurrentTerritoryCode(excludedTerritoryCode),
      ),
    };
  }

  private parseSoundRecordingId(object: any): Ern383.SoundRecordingId {
    const attributes = {
      isReplaced: object.$?.IsReplaced
        ? object.$.IsReplaced === "true"
        : undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      isrc: object.ISRC ? object.ISRC[0] : undefined,
      catalogNumber: object.CatalogNumber
        ? this.parseCatalogNumber(object.CatalogNumber[0])
        : undefined,
      proprietaryId: object.ProprietaryId
        ? object.ProprietaryId.map((proprietaryId: any) =>
            this.parseProprietaryId(proprietaryId),
          )
        : undefined,
    };
  }

  private parseSubTitle(object: any): Ern383.SubTitle {
    const attributes = {
      languageAndScriptCode: object.$?.languageAndScriptCode || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  private parseTechnicalImageDetails(
    object: any,
  ): Ern383.TechnicalImageDetails {
    const attributes = {
      languageAndScriptCode: object.$?.languageAndScriptCode || undefined,
    };

    const parsed: Ern383.TechnicalImageDetails = {
      _attributes: object.$ ? attributes : undefined,
      technicalResourceDetailsReference:
        object.TechnicalResourceDetailsReference[0],
      // @todo <xs:element name="DrmPlatformType" minOccurs="0" type="ern:DrmPlatformType" />
      // @todo <xs:element name="ContainerFormat" minOccurs="0" type="ern:ContainerFormat" />
      // @todo <xs:element name="ImageCodecType" minOccurs="0" type="ern:ImageCodecType" />
      // @todo <xs:element name="ImageHeight" minOccurs="0" type="ern:Extent" />
      // @todo <xs:element name="ImageWidth" minOccurs="0" type="ern:Extent" />
      // @todo <xs:element name="AspectRatio" minOccurs="0" type="ern:AspectRatio" />
      colorDepth: object.ColorDepth
        ? parseInt(object.ColorDepth[0])
        : undefined,
      imageResolution: object.ImageResolution
        ? parseInt(object.ImageResolution[0])
        : undefined,
      isPreview: object.IsPreview ? object.IsPreview[0] === "true" : undefined,
      // @todo <xs:element name="PreviewDetails" minOccurs="0" type="ern:PreviewDetails" />
      // @todo <xs:element name="FulfillmentDate" minOccurs="0" type="ern:FulfillmentDate" />
      // @todo <xs:element name="ConsumerFulfillmentDate" minOccurs="0" type="ern:FulfillmentDate" />
      file: undefined,
      // @todo <xs:element name="Fingerprint" minOccurs="0" maxOccurs="unbounded" type="ern:Fingerprint" />
    };

    if (object.File) {
      parsed.file = object.File.map((file: any) => this.parseFile(file));
    } else if (object.FileAvailabilityDescription) {
      parsed.fileAvailabilityDescription =
        object.FileAvailabilityDescription.map(
          (fileAvailabilityDescription: any) =>
            this.parseDescription(fileAvailabilityDescription),
        );
    }

    return parsed;
  }

  private parseTechnicalSoundRecordingDetails(
    object: any,
  ): Ern383.TechnicalSoundRecordingDetails {
    const attributes = {
      languageAndScriptCode: object.$?.languageAndScriptCode || undefined,
    };

    const parsed: Ern383.TechnicalSoundRecordingDetails = {
      _attributes: object.$ ? attributes : undefined,
      technicalResourceDetailsReference:
        object.TechnicalResourceDetailsReference[0],
      // @todo <xs:element name="DrmPlatformType" minOccurs="0" type="ern:DrmPlatformType" />
      // @todo <xs:element name="ContainerFormat" minOccurs="0" type="ern:ContainerFormat" />
      // @todo <xs:element name="AudioCodecType" minOccurs="0" type="ern:AudioCodecType" />
      // @todo <xs:element name="BitRate" minOccurs="0" type="ern:BitRate" />
      numberOfChannels: object.NumberOfChannels
        ? parseInt(object.NumberOfChannels[0])
        : undefined,
      // @todo <xs:element name="SamplingRate" minOccurs="0" type="ern:SamplingRate" />
      bitsPerSample: object.BitsPerSample
        ? parseInt(object.BitsPerSample[0])
        : undefined,
      duration: object.Duration
        ? convertDurationToMilliseconds(object.Duration[0])
        : undefined,
      resourceProcessingRequired: object.ResourceProcessingRequired
        ? object.ResourceProcessingRequired[0] === "true"
        : undefined,
      usableResourceDuration: object.UsableResourceDuration
        ? convertDurationToMilliseconds(object.UsableResourceDuration[0])
        : undefined,
      isPreview: object.IsPreview ? object.IsPreview[0] === "true" : undefined,
      // @todo <xs:element name="PreviewDetails" minOccurs="0" type="ern:SoundRecordingPreviewDetails" />
      // @todo <xs:element name="FulfillmentDate" minOccurs="0" type="ern:FulfillmentDate" />
      // @todo <xs:element name="ConsumerFulfillmentDate" minOccurs="0" type="ern:FulfillmentDate" />
      file: undefined,
      // @todo <xs:element name="Fingerprint" minOccurs="0" maxOccurs="unbounded" type="ern:Fingerprint" />
    };

    if (object.File) {
      parsed.file = object.File.map((file: any) => this.parseFile(file));
    } else if (object.FileAvailabilityDescription) {
      parsed.fileAvailabilityDescription =
        object.FileAvailabilityDescription.map(
          (fileAvailabilityDescription: any) =>
            this.parseDescription(fileAvailabilityDescription),
        );
    }

    return parsed;
  }

  private parseTitleText(object: any): Ern383.TitleText {
    const attributes = {
      languageAndScriptCode: object.$?.languageAndScriptCode || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }
}
