import { ILogger } from "@lickd/logger";
import { Ern411 } from "../../../../types";

export abstract class AbstractParser {
  public constructor(protected logger: ILogger) {}

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
}
