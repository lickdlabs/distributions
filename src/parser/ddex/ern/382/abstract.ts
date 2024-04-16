import { ILogger } from "@lickd/logger";
import { Ern382 } from "../../../../types";
import { convertDurationToMilliseconds } from "../../../../utils";

export abstract class AbstractParser {
  public constructor(protected logger: ILogger) {}

  protected parseComment(object: any): Ern382.Comment {
    const attributes = {
      languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  protected parseCatalogNumber(object: any): Ern382.CatalogNumber {
    return {
      _attributes: {
        namespace: object.$.Namespace,
      },
      value: object._,
    };
  }

  protected parseCurrentTerritoryCode(
    object: any,
  ): Ern382.CurrentTerritoryCode {
    const attributes = {
      identifierType: object.$?.IdentifierType || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  protected parseDescription(object: any): Ern382.Description {
    const attributes = {
      languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  protected parseFile(object: any): Ern382.File {
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

  protected parseHashSum(object: any): Ern382.HashSum {
    return {
      hashSum: object.HashSum[0],
      hashSumAlgorithmType: object.HashSumAlgorithmType[0],
      hashSumDataType: object.HashSumDataType
        ? object.HashSumDataType[0]
        : undefined,
    };
  }

  protected parseImage(object: any): Ern382.Image {
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

  protected parseImageDetailsByTerritory(
    object: any,
  ): Ern382.ImageDetailsByTerritory {
    const attributes = {
      languageAndScriptCode: object.$?.languageAndScriptCode || undefined,
    };

    const parsed: Omit<
      Ern382.ImageDetailsByTerritory,
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

  protected parseMessageAuditTrail(object: any): Ern382.MessageAuditTrail {
    const attributes = {
      languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      messageAuditTrailEvent: object.MessageAuditTrailEvent.map(
        (messageAuditTrailEvent: any) =>
          this.parseMessageAuditTrailEvent(messageAuditTrailEvent),
      ),
    };
  }

  protected parseMessageAuditTrailEvent(
    object: any,
  ): Ern382.MessageAuditTrailEvent {
    return {
      messagingPartyDescriptor: this.parseMessagingParty(
        object.MessagingPartyDescriptor[0],
      ),
      dateTime: new Date(object.DateTime[0]),
    };
  }

  protected parseMessageHeader(object: any): Ern382.MessageHeader {
    const attributes = {
      languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      messageThreadId: object.MessageThreadId
        ? object.MessageThreadId[0]
        : undefined,
      messageId: object.MessageId[0],
      messageFileName: object.MessageFileName
        ? object.MessageFileName[0]
        : undefined,
      messageSender: this.parseMessagingParty(object.MessageSender[0]),
      sentOnBehalfOf: object.SentOnBehalfOf
        ? this.parseMessagingParty(object.SentOnBehalfOf[0])
        : undefined,
      messageRecipient: object.MessageRecipient.map((messageRecipient: any) =>
        this.parseMessagingParty(messageRecipient),
      ),
      messageCreatedDateTime: new Date(object.MessageCreatedDateTime[0]),
      messageAuditTrail: object.MessageAuditTrail
        ? this.parseMessageAuditTrail(object.MessageAuditTrail[0])
        : undefined,
      comment: object.Comment
        ? this.parseComment(object.Comment[0])
        : undefined,
      messageControlType: object.MessageControlType
        ? object.MessageControlType[0]
        : undefined,
    };
  }

  protected parseMessagingParty(object: any): Ern382.MessagingParty {
    const attributes = {
      languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      partyId: object.PartyId.map((partyId: any) => this.parsePartyId(partyId)),
      partyName: object.PartyName
        ? this.parsePartyName(object.PartyName[0])
        : undefined,
      tradingName: object.TradingName
        ? this.parseName(object.TradingName[0])
        : undefined,
    };
  }

  protected parseName(object: any): Ern382.Name {
    const attributes = {
      languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  protected parsePartyId = (object: any): Ern382.PartyId => {
    const attributes = {
      namespace: object.$?.Namespace || undefined,
      isDpid: object.$?.IsDPID ? !!object.$.IsDPID : undefined,
      isIsni: object.$?.IsISNI ? !!object.$.IsISNI : undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  };

  protected parsePartyName(object: any): Ern382.PartyName {
    const attributes = {
      languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      fullName: this.parseName(object.FullName[0]),
      fullNameAsciiTranscribed: object.fullNameAsciiTranscribed
        ? object.fullNameAsciiTranscribed[0]
        : undefined,
      fullNameIndexed: object.FullNameIndexed
        ? this.parseName(object.FullNameIndexed[0])
        : undefined,
      namesBeforeKeyName: object.NamesBeforeKeyName
        ? this.parseName(object.NamesBeforeKeyName[0])
        : undefined,
      keyName: object.KeyName ? this.parseName(object.KeyName[0]) : undefined,
      namesAfterKeyName: object.NamesAfterKeyName
        ? this.parseName(object.NamesAfterKeyName[0])
        : undefined,
      abbreviatedName: object.AbbreviatedName
        ? this.parseName(object.AbbreviatedName[0])
        : undefined,
    };
  }

  protected parseProprietaryId(object: any): Ern382.ProprietaryId {
    return {
      _attributes: {
        namespace: object.$.Namespace,
      },
      value: object._,
    };
  }

  protected parseReferenceTitle(object: any): Ern382.ReferenceTitle {
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

  protected parseResourceList(object: any): Ern382.ResourceList {
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

  protected parseResourceProprietaryId(
    object: any,
  ): Ern382.ResourceProprietaryId {
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

  protected parseSoundRecording(object: any): Ern382.SoundRecording {
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

  protected parseSoundRecordingDetailsByTerritory(
    object: any,
  ): Ern382.SoundRecordingDetailsByTerritory {
    const attributes = {
      languageAndScriptCode: object.$?.languageAndScriptCode || undefined,
    };

    const parsed: Omit<
      Ern382.SoundRecordingDetailsByTerritory,
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

  protected parseSoundRecordingId(object: any): Ern382.SoundRecordingId {
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

  protected parseSubTitle(object: any): Ern382.SubTitle {
    const attributes = {
      languageAndScriptCode: object.$?.languageAndScriptCode || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  protected parseTechnicalImageDetails(
    object: any,
  ): Ern382.TechnicalImageDetails {
    const attributes = {
      languageAndScriptCode: object.$?.languageAndScriptCode || undefined,
    };

    const parsed: Ern382.TechnicalImageDetails = {
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

  protected parseTechnicalSoundRecordingDetails(
    object: any,
  ): Ern382.TechnicalSoundRecordingDetails {
    const attributes = {
      languageAndScriptCode: object.$?.languageAndScriptCode || undefined,
    };

    const parsed: Ern382.TechnicalSoundRecordingDetails = {
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

  protected parseTitleText(object: any): Ern382.TitleText {
    const attributes = {
      languageAndScriptCode: object.$?.languageAndScriptCode || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }
}
