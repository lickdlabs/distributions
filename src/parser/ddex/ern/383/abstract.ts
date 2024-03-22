import { ILogger } from "@lickd/logger";
import { Ern383 } from "../../../../types";

export abstract class AbstractParser {
  public constructor(protected logger: ILogger) {}

  protected parseComment(object: any): Ern383.Comment {
    const attributes = {
      languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  protected parseCatalogNumber(object: any): Ern383.CatalogNumber {
    return {
      _attributes: {
        namespace: object.$.Namespace,
      },
      value: object._,
    };
  }

  protected parseCurrentTerritoryCode(
    object: any,
  ): Ern383.CurrentTerritoryCode {
    const attributes = {
      identifierType: object.$?.IdentifierType || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  protected parseDescription(object: any): Ern383.Description {
    const attributes = {
      languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  protected parseFile(object: any): Ern383.File {
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

  protected parseHashSum(object: any): Ern383.HashSum {
    return {
      hashSum: object.HashSum[0],
      hashSumAlgorithmType: object.HashSumAlgorithmType[0],
      hashSumDataType: object.HashSumDataType
        ? object.HashSumDataType[0]
        : undefined,
    };
  }

  protected parseImage(object: any): Ern383.Image {
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

  protected parseMessageAuditTrail(object: any): Ern383.MessageAuditTrail {
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
  ): Ern383.MessageAuditTrailEvent {
    return {
      messagingPartyDescriptor: this.parseMessagingParty(
        object.MessagingPartyDescriptor[0],
      ),
      dateTime: new Date(object.DateTime[0]),
    };
  }

  protected parseMessageHeader(object: any): Ern383.MessageHeader {
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

  protected parseMessagingParty(object: any): Ern383.MessagingParty {
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

  protected parseName(object: any): Ern383.Name {
    const attributes = {
      languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  protected parsePartyId = (object: any): Ern383.PartyId => {
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

  protected parsePartyName(object: any): Ern383.PartyName {
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

  protected parseProprietaryId(object: any): Ern383.ProprietaryId {
    return {
      _attributes: {
        namespace: object.$.Namespace,
      },
      value: object._,
    };
  }

  protected parseReferenceTitle(object: any): Ern383.ReferenceTitle {
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

  protected parseResourceList(object: any): Ern383.ResourceList {
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

  protected parseSoundRecording(object: any): Ern383.SoundRecording {
    return {
      soundRecordingId: object.SoundRecordingId.map((soundRecordingId: any) =>
        this.parseSoundRecordingId(soundRecordingId),
      ),
      resourceReference: object.ResourceReference[0],
      referenceTitle: this.parseReferenceTitle(object.ReferenceTitle[0]),
      duration: object.Duration[0],
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

  protected parseSoundRecordingId(object: any): Ern383.SoundRecordingId {
    const attributes = {
      isReplaced: object.$?.isReplaced
        ? object.$?.isReplaced === "true"
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

  protected parseSubTitle(object: any): Ern383.SubTitle {
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
  ): Ern383.TechnicalImageDetails {
    const attributes = {
      languageAndScriptCode: object.$?.languageAndScriptCode || undefined,
    };

    const parsed: Ern383.TechnicalImageDetails = {
      _attributes: object.$ ? attributes : undefined,
      technicalResourceDetailsReference:
        object.TechnicalResourceDetailsReference[0],
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
  ): Ern383.TechnicalSoundRecordingDetails {
    const attributes = {
      languageAndScriptCode: object.$?.languageAndScriptCode || undefined,
    };

    const parsed: Ern383.TechnicalSoundRecordingDetails = {
      _attributes: object.$ ? attributes : undefined,
      technicalResourceDetailsReference:
        object.TechnicalResourceDetailsReference[0],
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

  protected parseTitleText(object: any): Ern383.TitleText {
    const attributes = {
      languageAndScriptCode: object.$?.languageAndScriptCode || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }
}
