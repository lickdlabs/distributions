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
}
