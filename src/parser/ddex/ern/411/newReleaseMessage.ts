import { Ern411 } from "../../../../types";
import { convertDurationToMilliseconds } from "../../../../utils";
import { AbstractParser } from "./abstract";

export class NewReleaseMessageParser extends AbstractParser {
  public parse(object: any): Ern411.ErnNewReleaseMessage {
    return {
      type: "ddex",
      version: 411,
      action: Ern411.Actions.NEW_RELEASE_MESSAGE,
      element: {
        _attributes: {
          releaseProfileVersionId: object.$.ReleaseProfileVersionId,
          releaseProfileVariantVersionId:
            object.$.ReleaseProfileVariantVersionId,
          languageAndScriptCode: object.$.LanguageAndScriptCode,
        },
        messageHeader: this.parseMessageHeader(object.MessageHeader[0]),
        partyList: this.parsePartyList(object.PartyList[0]),
        resourceList: this.parseResourceList(object.ResourceList[0]),
      },
    };
  }

  private parseCatalogNumber(object: any): Ern411.CatalogNumber {
    return {
      _attributes: {
        namespace: object.$.Namespace,
      },
      value: object._,
    };
  }

  private parseContributorRole(object: any): Ern411.ContributorRole {
    const attributes = {
      namespace: object.$?.Namespace || undefined,
      userDefinedValue: object.$?.UserDefinedValue || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  private parseDetailedHashSum(object: any): Ern411.DetailedHashSum {
    return {
      algorithm: this.parseHashSumAlgorithmType(object.Algorithm[0]),
      version: object.Version ? object.Version[0] : undefined,
      parameter: object.Parameter ? object.Parameter[0] : undefined,
      dataType: object.DataType ? object.DataType[0] : undefined,
      hashSumValue: object.HashSumValue[0],
    };
  }

  private parseDetailedPartyId(object: any): Ern411.DetailedPartyId {
    return {
      isni: object.ISNI ? object.ISNI[0] : undefined,
      dpid: object.DPID ? object.DPID[0] : undefined,
      ipiNameNumber: object.IpiNameNumber ? object.IpiNameNumber[0] : undefined,
      ipn: object.IPN ? object.IPN[0] : undefined,
      cisacSocietyId: object.CisacSocietyId
        ? object.CisacSocietyId[0]
        : undefined,
      proprietaryId: object.ProprietaryId
        ? object.ProprietaryId.map((proprietaryId: any) =>
            this.parseProprietaryId(proprietaryId),
          )
        : undefined,
    };
  }

  private parseDisplayArtist(object: any): Ern411.DisplayArtist {
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

  private parseDisplayArtistNameWithDefault(
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

  private parseDisplayArtistRole(object: any): Ern411.DisplayArtistRole {
    const attributes = {
      namespace: object.$?.Namespace || undefined,
      userDefinedValue: object.$?.UserDefinedValue || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  private parseDisplaySubTitle(object: any): Ern411.DisplaySubTitle {
    const attributes = {
      sequenceNumber: object.$?.SequenceNumber
        ? parseInt(object.$.SequenceNumber)
        : undefined,
      isDisplayedInTitle: object.$?.IsDisplayedInTitle
        ? object.$.IsDisplayedInTitle === "true"
        : undefined,
      subTitleType: object.$?.SubTitleType || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  private parseDisplayTitle(object: any): Ern411.DisplayTitle {
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

  private parseDisplayTitleText(object: any): Ern411.DisplayTitleText {
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

  private parseFile(object: any): Ern411.File {
    return {
      uri: object.URI[0],
      hashSum: object.HashSum
        ? this.parseDetailedHashSum(object.HashSum[0])
        : undefined,
      fileSize: object.FileSize ? parseFloat(object.FileSize[0]) : undefined,
    };
  }

  private parseHashSumAlgorithmType(object: any): Ern411.HashSumAlgorithmType {
    const attributes = {
      namespace: object.$?.Namespace || undefined,
      userDefinedValue: object.$?.UserDefinedValue || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  private parseImage(object: any): Ern411.Image {
    const attributes = {
      languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
      isSupplemental: object.$?.IsSupplemental
        ? object.$?.IsSupplemental === "true"
        : undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      resourceReference: object.ResourceReference[0],
      type: this.parseImageType(object.Type[0]),
      resourceId: object.ResourceId.map((resourceId: any) =>
        this.parseResourceProprietaryId(resourceId),
      ),
      technicalDetails: object.TechnicalDetails
        ? object.TechnicalDetails.map((technicalDetails: any) =>
            this.parseTechnicalImageDetails(technicalDetails),
          )
        : undefined,
    };
  }

  private parseImageType(object: any): Ern411.ImageType {
    const attributes = {
      namespace: object.$?.Namespace || undefined,
      userDefinedValue: object.$?.UserDefinedValue || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  private parseName(object: any): Ern411.Name {
    const attributes = {
      languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  private parseParty(object: any): Ern411.Party {
    const parsed: Omit<Ern411.Party, "partyId" | "partyName"> = {
      partyReference: object.PartyReference[0],
    };

    if (object.PartyName) {
      return {
        ...parsed,
        partyName: object.PartyName.map((partyName: any) =>
          this.parsePartyNameWithTerritory(partyName),
        ),
        partyId: object.PartyId
          ? object.PartyId.map((partyId: any) =>
              this.parseDetailedPartyId(partyId),
            )
          : undefined,
      };
    }

    return {
      ...parsed,
      partyId: object.PartyId.map((partyId: any) =>
        this.parseDetailedPartyId(partyId),
      ),
    };
  }

  private parsePartyList(object: any): Ern411.PartyList {
    return {
      party: object.Party.map((party: any) => this.parseParty(party)),
    };
  }

  private parsePartyNameWithTerritory(
    object: any,
  ): Ern411.PartyNameWithTerritory {
    const attributes = {
      languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
      isNickname: object.$?.IsNickname
        ? object.$?.IsNickname === "true"
        : undefined,
      isStageName: object.$?.IsStageName
        ? object.$?.IsStageName === "true"
        : undefined,
      isLegalName: object.$?.IsLegalName
        ? object.$?.IsLegalName === "true"
        : undefined,
      applicableTerritoryCode: object.$?.ApplicableTerritoryCode || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      fullName: this.parseName(object.FullName[0]),
      fullNameAsciiTranscribed: object.FullNameAsciiTranscribed
        ? object.FullNameAsciiTranscribed[0]
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

  private parseParentalWarningTypeWithTerritory(
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

  private parsePrefix(object: any): Ern411.Prefix {
    const attributes = {
      languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  private parseProprietaryId(object: any): Ern411.ProprietaryId {
    return {
      _attributes: {
        namespace: object.$.Namespace,
      },
      value: object._,
    };
  }

  private parseResourceList(object: any): Ern411.ResourceList {
    return {
      soundRecording: object.SoundRecording
        ? object.SoundRecording.map((soundRecording: any) =>
            this.parseSoundRecording(soundRecording),
          )
        : undefined,
      // @todo <xs:element name="Video" minOccurs="0" maxOccurs="unbounded" type="ern:Video" />
      image: object.Image
        ? object.Image.map((image: any) => this.parseImage(image))
        : undefined,
      text: object.Text
        ? object.Text.map((text: any) => this.parseText(text))
        : undefined,
      // @todo <xs:element name="SheetMusic" minOccurs="0" maxOccurs="unbounded" type="ern:SheetMusic" />
      // @todo <xs:element name="Software" minOccurs="0" maxOccurs="unbounded" type="ern:Software" />
    };
  }

  private parseResourceProprietaryId(
    object: any,
  ): Ern411.ResourceProprietaryId {
    const attributes = {
      isReplaced: object.IsReplaced
        ? object.IsReplaced[0] === "true"
        : undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      proprietaryId: object.ProprietaryId.map((proprietaryId: any) =>
        this.parseProprietaryId(proprietaryId),
      ),
    };
  }

  private parseSoundRecording(object: any): Ern411.SoundRecording {
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
      duration: convertDurationToMilliseconds(object.Duration[0]),
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

  private parseSoundRecordingId(object: any): Ern411.SoundRecordingId {
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

  private parseSoundRecordingType(object: any): Ern411.SoundRecordingType {
    const attributes = {
      namespace: object.$?.Namespace || undefined,
      userDefinedValue: object.$?.UserDefinedValue || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  private parseTechnicalImageDetails(
    object: any,
  ): Ern411.TechnicalImageDetails {
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
      bitDepth: object.BitDepth ? parseInt(object.BitDepth[0]) : undefined,
      isPreview: object.IsPreview ? object.IsPreview[0] === "true" : undefined,
      // @todo <xs:element name="PreviewDetails" minOccurs="0" type="ern:PreviewDetails" />
      // @todo <xs:element name="File" minOccurs="0" type="ern:File" />
      file: object.File ? this.parseFile(object.File[0]) : undefined,
      // @todo <xs:element name="Fingerprint" minOccurs="0" maxOccurs="unbounded" type="ern:Fingerprint" />
    };
  }

  private parseTechnicalSoundRecordingDetails(
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
      // @todo <xs:element name="AudioCodecType" minOccurs="0" type="ern:AudioCodecType" />
      // @todo <xs:element name="BitRate" minOccurs="0" type="ern:BitRate" />
      // @todo <xs:element name="OriginalBitRate" minOccurs="0" type="ern:BitRate" />
      numberOfChannels: object.NumberOfChannels
        ? parseInt(object.NumberOfChannels[0])
        : undefined,
      // @todo <xs:element name="SamplingRate" minOccurs="0" type="ern:SamplingRate" />
      // @todo <xs:element name="OriginalSamplingRate" minOccurs="0" type="ern:SamplingRate" />
      bitsPerSample: object.BitsPerSample
        ? parseInt(object.BitsPerSample[0])
        : undefined,
      duration: object.Duration
        ? convertDurationToMilliseconds(object.Duration[0])
        : undefined,
      bitDepth: object.BitDepth ? parseInt(object.BitDepth[0]) : undefined,
      isPreview: object.IsPreview ? object.IsPreview[0] === "true" : undefined,
      // @todo <xs:element name="PreviewDetails" minOccurs="0" type="ern:SoundRecordingPreviewDetails" />
      file: object.File ? this.parseFile(object.File[0]) : undefined,
      // @todo <xs:element name="Fingerprint" minOccurs="0" maxOccurs="unbounded" type="ern:Fingerprint" />
    };
  }

  private parseTechnicalTextDetails(object: any): Ern411.TechnicalTextDetails {
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
      // @todo <xs:element name="TextCodecType" minOccurs="0" type="ern:TextCodecType" />
      bitDepth: object.BitDepth ? parseInt(object.BitDepth[0]) : undefined,
      isPreview: object.IsPreview ? object.IsPreview[0] === "true" : undefined,
      // @todo <xs:element name="PreviewDetails" minOccurs="0" type="ern:PreviewDetails" />
      file: object.File ? this.parseFile(object.File[0]) : undefined,
      // @todo <xs:element name="Fingerprint" minOccurs="0" maxOccurs="unbounded" type="ern:Fingerprint" />
    };
  }

  private parseText(object: any): Ern411.Text {
    const attributes = {
      languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
      isSupplemental: object.$?.IsSupplemental
        ? object.$.IsSupplemental === "true"
        : undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      resourceReference: object.ResourceReference[0],
      type: this.parseTextType(object.TextType[0]),
      // @todo <xs:element name="ResourceId" minOccurs="0" maxOccurs="unbounded" type="ern:TextId" />
      // @todo <xs:element name="WorkId" minOccurs="0" maxOccurs="unbounded" type="ern:MusicalWorkId" />
      // @todo <xs:element name="DisplayTitleText" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayTitleText" />
      // @todo <xs:element name="DisplayTitle" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayTitle" />
      // @todo <xs:element name="AdditionalTitle" minOccurs="0" maxOccurs="unbounded" type="ern:AdditionalTitle" />
      // @todo <xs:element name="VersionType" minOccurs="0" maxOccurs="unbounded" type="ern:VersionType" />
      // @todo <xs:element name="DisplayArtistName" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayArtistNameWithDefault" />
      // @todo <xs:element name="DisplayArtist" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayArtist" />
      // @todo <xs:element name="Contributor" minOccurs="0" maxOccurs="unbounded" type="ern:Contributor" />
      // @todo <xs:element name="ResourceRightsController" minOccurs="0" maxOccurs="unbounded" type="ern:ResourceRightsController" />
      // @todo <xs:element name="WorkRightsController" minOccurs="0" maxOccurs="unbounded" type="ern:WorkRightsController" />
      // @todo <xs:element name="CLine" minOccurs="0" maxOccurs="unbounded" type="ern:CLineWithDefault" />
      // @todo <xs:element name="CourtesyLine" minOccurs="0" maxOccurs="unbounded" type="ern:CourtesyLineWithDefault" />
      // @todo <xs:element name="CreationDate" minOccurs="0" type="ern:EventDateWithoutFlags" />
      // @todo <xs:element name="FirstPublicationDate" minOccurs="0" maxOccurs="unbounded" type="ern:FulfillmentDateWithTerritory" />
      // @todo <xs:element name="ParentalWarningType" minOccurs="0" maxOccurs="unbounded" type="ern:ParentalWarningTypeWithTerritory" />
      // @todo <xs:element name="RelatedRelease" minOccurs="0" maxOccurs="unbounded" type="ern:RelatedRelease" />
      // @todo <xs:element name="RelatedResource" minOccurs="0" maxOccurs="unbounded" type="ern:RelatedResource" />
      // @todo <xs:element name="ContainsHiddenContent" minOccurs="0" type="xs:boolean" />
      // @todo <xs:element name="ResourceContainedResourceReferenceList" minOccurs="0" type="ern:ResourceContainedResourceReferenceList" />
      technicalDetails: object.TechnicalDetails
        ? object.TechnicalDetails.map((technicalDetails: any) =>
            this.parseTechnicalTextDetails(technicalDetails),
          )
        : undefined,
    };
  }

  private parseTextType(object: any): Ern411.TextType {
    const attributes = {
      namespace: object.$?.Namespace || undefined,
      userDefinedValue: object.$?.UserDefinedValue || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  private parseTitleDisplayInformation(
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
