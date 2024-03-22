import { ILogger } from "@lickd/logger";
import { Ern411 } from "../../../../types";

export abstract class AbstractParser {
  public constructor(protected logger: ILogger) {}

  protected parseCatalogNumber(object: any): Ern411.CatalogNumber {
    return {
      _attributes: {
        namespace: object.$.Namespace,
      },
      value: object._,
    };
  }

  protected parseContributorRole(object: any): Ern411.ContributorRole {
    const attributes = {
      namespace: object.$?.Namespace || undefined,
      userDefinedValue: object.$?.UserDefinedValue || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  protected parseDetailedHashSum(object: any): Ern411.DetailedHashSum {
    return {
      algorithm: this.parseHashSumAlgorithmType(object.Algorithm[0]),
      version: object.Version ? object.Version[0] : undefined,
      parameter: object.Parameter ? object.Parameter[0] : undefined,
      dataType: object.DataType ? object.DataType[0] : undefined,
      hashSumValue: object.HashSumValue[0],
    };
  }

  protected parseDisplayArtist(object: any): Ern411.DisplayArtist {
    const attributes = {
      sequenceNumber: object.$?.SequenceNumber
        ? parseInt(object.$.SequenceNumber)
        : undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      artistPartyReference: object.ArtistPartyReference[0],
      displayArtistRole: this.parseDisplayArtistRole(
        object.DisplayArtistRole[0],
      ),
      artisticRole: object.ArtisticRole
        ? object.ArtisticRole.map((artisticRole: any) =>
            this.parseContributorRole(artisticRole),
          )
        : undefined,
      titleDisplayInformation: object.TitleDisplayInformation
        ? object.TitleDisplayInformation.map((titleDisplayInformation: any) =>
            this.parseTitleDisplayInformation(titleDisplayInformation),
          )
        : undefined,
    };
  }

  protected parseDisplayArtistNameWithDefault(
    object: any,
  ): Ern411.DisplayArtistNameWithDefault {
    const attributes = {
      languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
      applicableTerritoryCode: object.$?.ApplicableTerritoryCode || undefined,
      isDefault: object.$?.IsDefault
        ? object.$.IsDefault === "true"
        : undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  protected parseDisplayArtistRole(object: any): Ern411.DisplayArtistRole {
    const attributes = {
      namespace: object.$?.Namespace || undefined,
      userDefinedValue: object.$?.UserDefinedValue || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  protected parseDisplaySubTitle(object: any): Ern411.DisplaySubTitle {
    const attributes = {
      sequenceNumber: object.$?.SequenceNumber
        ? parseInt(object.$.SequenceNumber)
        : undefined,
      isDisplayedInTitle: object.$.IsDisplayedInTitle
        ? object.$.IsDisplayedInTitle === "true"
        : undefined,
      subTitleType: object.$?.SubTitleType || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  protected parseDisplayTitle(object: any): Ern411.DisplayTitle {
    const attributes = {
      languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
      applicableTerritoryCode: object.$?.ApplicableTerritoryCode || undefined,
      isDefault: object.$?.IsDefault
        ? object.$.IsDefault === "true"
        : undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      titleText: object.TitleText[0],
      subTitle: object.SubTitle
        ? object.SubTitle.map((subTitle: any) =>
            this.parseDisplaySubTitle(subTitle),
          )
        : undefined,
    };
  }

  protected parseDisplayTitleText(object: any): Ern411.DisplayTitleText {
    const attributes = {
      languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
      applicableTerritoryCode: object.$?.ApplicableTerritoryCode || undefined,
      isDefault: object.$?.IsDefault
        ? object.$.IsDefault === "true"
        : undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  protected parseFile(object: any): Ern411.File {
    return {
      uri: object.URI[0],
      hashSum: object.HashSum
        ? this.parseDetailedHashSum(object.HashSum[0])
        : undefined,
      fileSize: object.FileSize ? parseFloat(object.FileSize[0]) : undefined,
    };
  }

  protected parseHashSumAlgorithmType(
    object: any,
  ): Ern411.HashSumAlgorithmType {
    const attributes = {
      namespace: object.$?.Namespace || undefined,
      userDefinedValue: object.$?.UserDefinedValue || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object.Algorithm[0],
    };
  }

  protected parseMessageAuditTrail(object: any): Ern411.MessageAuditTrail {
    return {
      messageAuditTrailEvent: object.MessageAuditTrailEvent.map(
        (messageAuditTrailEvent: any) =>
          this.parseMessageAuditTrailEvent(messageAuditTrailEvent),
      ),
    };
  }

  protected parseMessageAuditTrailEvent(
    object: any,
  ): Ern411.MessageAuditTrailEvent {
    return {
      messagingPartyDescriptor: this.parseMessagingPartyWithoutCode(
        object.MessagingPartyDescriptor[0],
      ),
      dateTime: new Date(object.DateTime[0]),
    };
  }

  protected parseMessageHeader(object: any): Ern411.MessageHeader {
    return {
      messageThreadId: object.MessageThreadId
        ? object.MessageThreadId[0]
        : undefined,
      messageId: object.MessageId[0],
      messageFileName: object.MessageFileName
        ? object.MessageFileName[0]
        : undefined,
      messageSender: this.parseMessagingPartyWithoutCode(
        object.MessageSender[0],
      ),
      sentOnBehalfOf: object.SentOnBehalfOf
        ? this.parseMessagingPartyWithoutCode(object.SentOnBehalfOf[0])
        : undefined,
      messageRecipient: object.MessageRecipient.map((messageRecipient: any) =>
        this.parseMessagingPartyWithoutCode(messageRecipient),
      ),
      messageCreatedDateTime: new Date(object.MessageCreatedDateTime[0]),
      messageAuditTrail: object.MessageAuditTrail
        ? this.parseMessageAuditTrail(object.MessageAuditTrail[0])
        : undefined,
      messageControlType: object.MessageControlType
        ? object.MessageControlType[0]
        : undefined,
    };
  }

  protected parseMessagingPartyWithoutCode(
    object: any,
  ): Ern411.MessagingPartyWithoutCode {
    return {
      partyId: object.PartyId[0],
      partyName: object.PartyName
        ? this.parsePartyNameWithoutCode(object.PartyName[0])
        : undefined,
      tradingName: object.TradingName ? object.TradingName[0] : undefined,
    };
  }

  protected parseParentalWarningTypeWithTerritory(
    object: any,
  ): Ern411.ParentalWarningTypeWithTerritory {
    const attributes = {
      namespace: object.$?.Namespace || undefined,
      applicableTerritoryCode: object.$?.ApplicableTerritoryCode || undefined,
      userDefinedValue: object.$?.UserDefinedValue || undefined,
      isDefault: object.$?.IsDefault
        ? object.$.IsDefault === "true"
        : undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  protected parsePartyNameWithoutCode(
    object: any,
  ): Ern411.PartyNameWithoutCode {
    return {
      fullName: object.FullName[0],
      fullNameAsciiTranscribed: object.FullNameAsciiTranscribed
        ? object.FullNameAsciiTranscribed[0]
        : undefined,
      fullNameIndexed: object.FullNameIndexed
        ? object.FullNameIndexed[0]
        : undefined,
      namesBeforeKeyName: object.NamesBeforeKeyName
        ? object.NamesBeforeKeyName[0]
        : undefined,
      keyName: object.KeyName ? object.KeyName[0] : undefined,
      namesAfterKeyName: object.NamesAfterKeyName
        ? object.NamesAfterKeyName[0]
        : undefined,
      abbreviatedName: object.AbbreviatedName
        ? object.AbbreviatedName[0]
        : undefined,
    };
  }

  protected parsePrefix(object: any): Ern411.Prefix {
    const attributes = {
      languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  protected parseProprietaryId(object: any): Ern411.ProprietaryId {
    return {
      _attributes: {
        namespace: object.$.Namespace,
      },
      value: object._,
    };
  }

  protected parseResourceList(object: any): Ern411.ResourceList {
    return {
      soundRecording: object.SoundRecording
        ? object.SoundRecording.map((soundRecording: any) =>
            this.parseSoundRecording(soundRecording),
          )
        : undefined,
    };
  }

  protected parseSoundRecording(object: any): Ern411.SoundRecording {
    const attributes = {
      languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
      isSupplemental: object.$?.IsSupplemental
        ? object.$?.IsSupplemental === "true"
        : undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      resourceReference: object.ResourceReference[0],
      type: this.parseSoundRecordingType(object.Type[0]),
      resourceId: object.ResourceId.map((resourceId: any) =>
        this.parseSoundRecordingId(resourceId),
      ),
      displayTitleText: object.DisplayTitleText.map((displayTitleText: any) =>
        this.parseDisplayTitleText(displayTitleText),
      ),
      displayTitle: object.DisplayTitle.map((displayTitle: any) =>
        this.parseDisplayTitle(displayTitle),
      ),
      displayArtistName: object.DisplayArtistName.map(
        (displayArtistName: any) =>
          this.parseDisplayArtistNameWithDefault(displayArtistName),
      ),
      displayArtist: object.DisplayArtist.map((displayArtist: any) =>
        this.parseDisplayArtist(displayArtist),
      ),
      duration: object.Duration[0],
      parentalWarningType: object.ParentalWarningType.map(
        (parentalWarningType: any) =>
          this.parseParentalWarningTypeWithTerritory(parentalWarningType),
      ),
      technicalDetails: object.TechnicalDetails
        ? object.TechnicalDetails.map((technicalDetails: any) =>
            this.parseTechnicalSoundRecordingDetails(technicalDetails),
          )
        : undefined,
    };
  }

  protected parseSoundRecordingId(object: any): Ern411.SoundRecordingId {
    const attributes = {
      isReplaced: object.IsReplaced
        ? object.IsReplaced[0] === "true"
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

  protected parseSoundRecordingType(object: any): Ern411.SoundRecordingType {
    const attributes = {
      namespace: object.$?.Namespace || undefined,
      userDefinedValue: object.$?.UserDefinedValue || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  protected parseTechnicalSoundRecordingDetails(
    object: any,
  ): Ern411.TechnicalSoundRecordingDetails {
    const attributes = {
      languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
      applicableTerritoryCode: object.$?.ApplicableTerritoryCode || undefined,
      isDefault: object.$?.IsDefault
        ? object.$.IsDefault === "true"
        : undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      technicalResourceDetailsReference:
        object.TechnicalResourceDetailsReference[0],
      file: object.File ? this.parseFile(object.File[0]) : undefined,
    };
  }

  protected parseTitleDisplayInformation(
    object: any,
  ): Ern411.TitleDisplayInformation {
    const attributes = {
      languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
      sequenceNumber: object.$?.SequenceNumber
        ? parseInt(object.$.SequenceNumber)
        : undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      isDisplayedInTitle: object.IsDisplayedInTitle[0] === "true",
      prefix: object.Prefix
        ? object.Prefix.map((prefix: any) => this.parsePrefix(prefix))
        : undefined,
    };
  }
}
