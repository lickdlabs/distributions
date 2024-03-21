import { ILogger } from "@lickd/logger";
import { Ern382 } from "../../../../types";

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
    };
  }

  protected parseSoundRecording(object: any): Ern382.SoundRecording {
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

  protected parseSubTitle(object: any): Ern382.SubTitle {
    const attributes = {
      languageAndScriptCode: object.$?.languageAndScriptCode || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  protected parseTechnicalSoundRecordingDetails(
    object: any,
  ): Ern382.TechnicalSoundRecordingDetails {
    const attributes = {
      languageAndScriptCode: object.$?.languageAndScriptCode || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      technicalResourceDetailsReference:
        object.TechnicalResourceDetailsReference[0],
    };
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
