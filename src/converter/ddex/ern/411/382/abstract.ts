import { ILogger } from "@lickd/logger";
import { Ern382, Ern411 } from "../../../../../types";

export abstract class AbstractConverter {
  public constructor(protected logger: ILogger) {}

  protected convertMessageAuditTrail(
    ern: Ern382.MessageAuditTrail,
  ): Ern411.MessageAuditTrail {
    return {
      messageAuditTrailEvent: ern.messageAuditTrailEvent.map(
        (messageAuditTrailEvent) =>
          this.convertMessageAuditTrailEvent(messageAuditTrailEvent),
      ),
    };
  }

  protected convertMessageAuditTrailEvent(
    ern: Ern382.MessageAuditTrailEvent,
  ): Ern411.MessageAuditTrailEvent {
    return {
      messagingPartyDescriptor: this.convertMessagingPartyWithoutCode(
        ern.messagingPartyDescriptor,
      ),
      dateTime: ern.dateTime,
    };
  }

  protected convertMessageHeader(
    ern: Ern382.MessageHeader,
  ): Ern411.MessageHeader {
    return {
      messageThreadId: ern.messageThreadId,
      messageId: ern.messageId,
      messageFileName: ern.messageFileName,
      messageSender: this.convertMessagingPartyWithoutCode(ern.messageSender),
      sentOnBehalfOf: ern.sentOnBehalfOf
        ? this.convertMessagingPartyWithoutCode(ern.sentOnBehalfOf)
        : undefined,
      messageRecipient: ern.messageRecipient.map((messageRecipient) =>
        this.convertMessagingPartyWithoutCode(messageRecipient),
      ),
      messageCreatedDateTime: ern.messageCreatedDateTime,
      messageAuditTrail: ern.messageAuditTrail
        ? this.convertMessageAuditTrail(ern.messageAuditTrail)
        : undefined,
      messageControlType: ern.messageControlType,
    };
  }

  protected convertMessagingPartyWithoutCode(
    ern: Ern382.MessagingParty,
  ): Ern411.MessagingPartyWithoutCode {
    if (ern.partyId.length > 1) {
      this.logger.warn(
        "party id has more than one entry, only first entry is used",
      );
    }

    return {
      partyId: ern.partyId[0]
        .value as Ern411.MessagingPartyWithoutCode["partyId"],
      partyName: ern.partyName
        ? this.convertPartyNameWithoutCode(ern.partyName)
        : undefined,
      tradingName: ern.tradingName?.value,
    };
  }

  protected convertPartyNameWithoutCode(
    ern: Ern382.PartyName,
  ): Ern411.PartyNameWithoutCode {
    return {
      fullName: ern.fullName.value,
      fullNameAsciiTranscribed: ern.fullNameAsciiTranscribed,
      fullNameIndexed: ern.fullNameIndexed?.value,
      namesBeforeKeyName: ern.namesBeforeKeyName?.value,
      keyName: ern.keyName?.value,
      namesAfterKeyName: ern.namesAfterKeyName?.value,
      abbreviatedName: ern.abbreviatedName?.value,
    };
  }

  protected convertResourceList(ern: Ern382.ResourceList): Ern411.ResourceList {
    return {};
  }
}
