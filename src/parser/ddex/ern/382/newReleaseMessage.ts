import { Ern382 } from "../../../../types";
import { convertDurationToMilliseconds } from "../../../../utils";
import { AbstractParser } from "./abstract";

export class NewReleaseMessageParser extends AbstractParser {
  public parse(object: any): Ern382.ErnNewReleaseMessage {
    return {
      type: "ddex",
      version: 382,
      action: Ern382.Actions.NEW_RELEASE_MESSAGE,
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
        releaseList: this.parseReleaseList(object.ReleaseList[0]),
      },
    };
  }

  private parseCatalogNumber(object: any): Ern382.CatalogNumber {
    return {
      _attributes: {
        namespace: object.$.Namespace,
      },
      value: object._,
    };
  }

  private parseCurrentTerritoryCode(object: any): Ern382.CurrentTerritoryCode {
    const attributes = {
      identifierType: object.$?.IdentifierType || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  private parseDescription(object: any): Ern382.Description {
    const attributes = {
      languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  private parseFile(object: any): Ern382.File {
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

  private parseHashSum(object: any): Ern382.HashSum {
    return {
      hashSum: object.HashSum[0],
      hashSumAlgorithmType: object.HashSumAlgorithmType[0],
      hashSumDataType: object.HashSumDataType
        ? object.HashSumDataType[0]
        : undefined,
    };
  }

  private parseIcpn(object: any): Ern382.Icpn {
    const attributes = {
      isEan: object.$?.IsEan ? object.$.IsEan === "true" : undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  private parseImage(object: any): Ern382.Image {
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

  private parseProprietaryId(object: any): Ern382.ProprietaryId {
    return {
      _attributes: {
        namespace: object.$.Namespace,
      },
      value: object._,
    };
  }

  private parseReferenceTitle(object: any): Ern382.ReferenceTitle {
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

  private parseRelease(object: any): Ern382.Release {
    const attributes = {
      languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
      isMainRelease: object.$?.IsMainRelease
        ? object.$.IsMainRelease === "true"
        : undefined,
    };

    const parsed: Omit<
      Ern382.Release,
      "releaseResourceReferenceList" | "resourceOmissionReason"
    > = {
      _attributes: object.$ ? attributes : undefined,
      releaseId: object.ReleaseId.map((releaseId: any) =>
        this.parseReleaseId(releaseId),
      ),
      // @todo <xs:element name="ReleaseReference" minOccurs="0" maxOccurs="unbounded">
      // @todo <xs:element name="ExternalResourceLink" minOccurs="0" maxOccurs="unbounded" type="ern:ExternalResourceLink" />
      // @todo <xs:element name="SalesReportingProxyReleaseId" minOccurs="0" maxOccurs="unbounded" type="ern:SalesReportingProxyReleaseId" />
      referenceTitle: this.parseReferenceTitle(object.ReferenceTitle[0]),
      // @todo <xs:element name="ReleaseCollectionReferenceList" minOccurs="0" type="ern:ReleaseCollectionReferenceList" />
      // @todo <xs:element name="ReleaseType" minOccurs="0" maxOccurs="unbounded" type="ern:ReleaseType" />
      releaseDetailsByTerritory: object.ReleaseDetailsByTerritory.map(
        (releaseDetailsByTerritory: any) =>
          this.parseReleaseDetailsByTerritory(releaseDetailsByTerritory),
      ),
      // @todo <xs:element name="LanguageOfPerformance" minOccurs="0" maxOccurs="unbounded" type="avs:IsoLanguageCode" />
      // @todo <xs:element name="LanguageOfDubbing" minOccurs="0" maxOccurs="unbounded" type="avs:IsoLanguageCode" />
      // @todo <xs:element name="SubTitleLanguage" minOccurs="0" maxOccurs="unbounded" type="avs:IsoLanguageCode" />
      // @todo <xs:element name="Duration" minOccurs="0" type="xs:duration" />
      // @todo <xs:element name="RightsAgreementId" minOccurs="0" type="ern:RightsAgreementId" />
      // @todo <xs:element name="PLine" minOccurs="0" maxOccurs="unbounded" type="ern:PLine" />
      // @todo <xs:element name="CLine" minOccurs="0" maxOccurs="unbounded" type="ern:CLine" />
      // @todo <xs:element name="ArtistProfilePage" minOccurs="0" maxOccurs="unbounded" type="ern:WebPage" />
      // @todo <xs:element name="GlobalReleaseDate" minOccurs="0" type="ern:EventDate" />
      // @todo <xs:element name="GlobalOriginalReleaseDate" minOccurs="0" type="ern:EventDate" />
    };

    if (object.ReleaseResourceReferenceList) {
      return {
        ...parsed,
        releaseResourceReferenceList: this.parseReleaseResourceReferenceList(
          object.ReleaseResourceReferenceList[0],
        ),
      };
    }

    return {
      ...parsed,
      resourceOmissionReason: this.parseResourceOmissionReason(
        object.ResourceOmissionReason[0],
      ),
    };
  }

  private parseReleaseDetailsByTerritory(
    object: any,
  ): Ern382.ReleaseDetailsByTerritory {
    const attributes = {
      languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
      isMainRelease: object.$?.IsMainRelease
        ? object.$.IsMainRelease === "true"
        : undefined,
    };

    const parsed: Omit<
      Ern382.ReleaseDetailsByTerritory,
      "territoryCode" | "excludedTerritoryCode"
    > = {
      _attributes: object.$ ? attributes : undefined,

      // @todo <xs:element name="DisplayArtistName" minOccurs="0" maxOccurs="unbounded" type="ern:Name" />
      // @todo <xs:element name="LabelName" minOccurs="0" maxOccurs="unbounded" type="ern:LabelName" />
      // @todo <xs:element name="RightsAgreementId" minOccurs="0" type="ern:RightsAgreementId" />
      // @todo <xs:element name="Title" minOccurs="0" maxOccurs="unbounded" type="ern:Title" />
      // @todo <xs:element name="DisplayArtist" minOccurs="0" maxOccurs="unbounded" type="ern:Artist" />
      // @todo <xs:element name="IsMultiArtistCompilation" minOccurs="0" type="xs:boolean" />
      // @todo <xs:element name="AdministratingRecordCompany" minOccurs="0" maxOccurs="unbounded" type="ern:AdministratingRecordCompany" />
      // @todo <xs:element name="ReleaseType" minOccurs="0" maxOccurs="unbounded" type="ern:ReleaseType" />
      // @todo <xs:element name="RelatedRelease" minOccurs="0" maxOccurs="unbounded" type="ern:RelatedRelease" />
      // @todo <xs:element name="ParentalWarningType" minOccurs="0" maxOccurs="unbounded" type="ern:ParentalWarningType" />
      // @todo <xs:element name="AvRating" minOccurs="0" maxOccurs="unbounded" type="ern:AvRating" />
      // @todo <xs:element name="MarketingComment" minOccurs="0" type="ern:Comment" />
      // @todo <xs:element name="ResourceGroup" minOccurs="0" maxOccurs="unbounded" type="ern:ResourceGroup" />
      // @todo <xs:element name="Genre" minOccurs="0" maxOccurs="unbounded" type="ern:Genre" />
      // @todo <xs:element name="PLine" minOccurs="0" maxOccurs="unbounded" type="ern:PLine" />
      // @todo <xs:element name="CLine" minOccurs="0" maxOccurs="unbounded" type="ern:CLine" />
      // @todo <xs:element name="ReleaseDate" minOccurs="0" type="ern:EventDate" />
      // @todo <xs:element name="OriginalReleaseDate" minOccurs="0" type="ern:EventDate" />
      // @todo <xs:element name="OriginalDigitalReleaseDate" minOccurs="0" type="ern:EventDate" />
      // @todo <xs:choice minOccurs="0">
      //   <xs:element name="FileAvailabilityDescription" maxOccurs="unbounded" type="ern:Description" />
      //   <xs:element name="File" maxOccurs="unbounded" type="ern:File" />
      // </xs:choice>
      // @todo <xs:element name="Keywords" minOccurs="0" maxOccurs="unbounded" type="ern:Keywords" />
      // @todo <xs:element name="Synopsis" minOccurs="0" type="ern:Synopsis" />
      // @todo <xs:element name="Character" minOccurs="0" maxOccurs="unbounded" type="ern:Character" />
      // @todo <xs:element name="NumberOfUnitsPerPhysicalRelease" minOccurs="0" type="xs:integer" />
      // @todo <xs:element name="DisplayConductor" minOccurs="0" maxOccurs="unbounded" type="ern:Artist" />
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

  private parseReleaseId(object: any): Ern382.ReleaseId {
    const attributes = {
      isReplaced: object.$?.IsReplaced
        ? object.$.IsReplaced === "true"
        : undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      grid: object.GRID ? object.GRID[0] : undefined,
      isrc: object.ISRC ? object.ISRC[0] : undefined,
      icpn: object.ICPN ? this.parseIcpn(object.ICPN[0]) : undefined,
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

  private parseReleaseList(object: any): Ern382.ReleaseList {
    const attributes = {
      languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      release: object.Release
        ? object.Release.map((release: any) => this.parseRelease(release))
        : undefined,
    };
  }

  private parseReleaseResourceReference(
    object: any,
  ): Ern382.ReleaseResourceReference {
    const attributes = {
      releaseResourceType: object.$?.ReleaseResourceType || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  private parseReleaseResourceReferenceList(
    object: any,
  ): Ern382.ReleaseResourceReferenceList {
    return {
      releaseResourceReference: object.ReleaseResourceReference.map(
        (releaseResourceReference: any) =>
          this.parseReleaseResourceReference(releaseResourceReference),
      ),
    };
  }

  private parseResourceList(object: any): Ern382.ResourceList {
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

  private parseResourceOmissionReason(
    object: any,
  ): Ern382.ResourceOmissionReason {
    const attributes = {
      namespace: object.$?.Namespace || undefined,
      userDefinedValue: object.$?.UserDefinedValue || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }

  private parseResourceProprietaryId(
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

  private parseSoundRecording(object: any): Ern382.SoundRecording {
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

  private parseSoundRecordingId(object: any): Ern382.SoundRecordingId {
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

  private parseSubTitle(object: any): Ern382.SubTitle {
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

  private parseTechnicalSoundRecordingDetails(
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

  private parseTitleText(object: any): Ern382.TitleText {
    const attributes = {
      languageAndScriptCode: object.$?.languageAndScriptCode || undefined,
    };

    return {
      _attributes: object.$ ? attributes : undefined,
      value: object._ || object,
    };
  }
}
