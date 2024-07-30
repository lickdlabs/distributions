import path from "path";
import { Avs411, Ern383, Ern411 } from "../../../../types";
import { AbstractConverter } from "./abstract";

export class NewReleaseMessageConverter extends AbstractConverter {
  public convert(
    ern: Ern383.ErnNewReleaseMessage,
  ): Ern411.ErnNewReleaseMessage {
    return {
      type: "ddex",
      version: 411,
      action: Ern411.Actions.NEW_RELEASE_MESSAGE,
      element: {
        _attributes: {
          languageAndScriptCode:
            ern.element._attributes.languageAndScriptCode || "en",
        },
        messageHeader: this.convertMessageHeader(ern.element.messageHeader),
        partyList: {
          party: [],
        },
        resourceList: this.convertResourceList(ern.element.resourceList),
        releaseList: this.convertReleaseList(ern.element.releaseList),
      },
    };
  }

  private convertDetailedHashSum(ern: Ern383.HashSum): Ern411.DetailedHashSum {
    return {
      algorithm: {
        value:
          ern.hashSumAlgorithmType as unknown as Avs411.HashSumAlgorithmType,
      },
      dataType: ern.hashSumDataType as unknown as Avs411.BinaryDataType,
      hashSumValue: ern.hashSum,
    };
  }

  private convertFile(ern: Ern383.File): Ern411.File {
    if (ern.url) {
      return {
        uri: ern.url,
        hashSum: ern.hashSum
          ? this.convertDetailedHashSum(ern.hashSum)
          : undefined,
      };
    }

    return {
      uri: path.join(ern.filePath || "", ern.fileName || ""),
      hashSum: ern.hashSum
        ? this.convertDetailedHashSum(ern.hashSum)
        : undefined,
    };
  }

  private convertImage(ern: Ern383.Image): Ern411.Image {
    if (ern.imageDetailsByTerritory.length > 1) {
      this.logger.warn(
        "image has more than one territory entry, only first entry is used",
      );
    }

    const territory = ern.imageDetailsByTerritory[0];
    const attributes = {
      languageAndScriptCode: ern._attributes?.languageAndScriptCode,
    };

    return {
      _attributes: ern._attributes ? attributes : undefined,
      resourceReference: ern.resourceReference,
      type: {
        value: Avs411.ImageType.UNKNOWN,
      },
      resourceId: ern.imageId,
      technicalDetails: territory.technicalImageDetails
        ? territory.technicalImageDetails.map((technicalImageDetails) =>
            this.convertTechnicalImageDetails(technicalImageDetails),
          )
        : undefined,
    };
  }

  private convertRelease(ern: Ern383.Release): Ern411.Release {
    return {
      _attributes: {
        languageAndScriptCode: ern._attributes?.languageAndScriptCode,
      },
      releaseReference: "R0" as Ern411.Release["releaseReference"],
      releaseType: [
        {
          value: Avs411.ReleaseTypeErn4.USER_DEFINED,
        },
      ],
      releaseId: ern.releaseId as Ern411.ReleaseId,
      displayTitleText: [ern.referenceTitle.titleText],
      displayTitle: [
        {
          titleText: ern.referenceTitle.titleText.value,
          subTitle: ern.referenceTitle.subTitle
            ? [
                {
                  value: ern.referenceTitle.subTitle.value,
                },
              ]
            : undefined,
        },
      ],
      // @todo <xs:element name="AdditionalTitle" minOccurs="0" maxOccurs="unbounded" type="ern:AdditionalTitle" />
      displayArtistName: [],
      displayArtist: [],
      releaseLabelReference: [],
      // @todo <xs:element name="AdministratingRecordCompany" minOccurs="0" maxOccurs="unbounded" type="ern:AdministratingRecordCompanyWithReference" />
      // @todo <xs:element name="PLine" minOccurs="0" maxOccurs="unbounded" type="ern:PLineWithDefault" />
      // @todo <xs:element name="CLine" minOccurs="0" maxOccurs="unbounded" type="ern:CLineWithDefault" />
      // @todo <xs:element name="CourtesyLine" minOccurs="0" maxOccurs="unbounded" type="ern:CourtesyLineWithDefault" />
      // @todo <xs:element name="Duration" minOccurs="0" type="xs:duration" />
      genre: [],
      // @todo <xs:element name="ReleaseDate" minOccurs="0" maxOccurs="unbounded" type="ern:EventDateWithDefault" />
      // @todo <xs:element name="OriginalReleaseDate" minOccurs="0" maxOccurs="unbounded" type="ern:EventDateWithDefault" />
      parentalWarningType: [],
      // @todo <xs:element name="AvRating" minOccurs="0" maxOccurs="unbounded" type="ern:AvRating" />
      // @todo <xs:element name="RelatedRelease" minOccurs="0" maxOccurs="unbounded" type="ern:RelatedRelease" />
      // @todo <xs:choice minOccurs="0">
      //   <xs:element name="IsCompilation" type="xs:boolean" />
      //   <xs:element name="IsMultiArtistCompilation" type="xs:boolean" />
      // </xs:choice>
      resourceGroup: {},
      // @todo <xs:element name="ExternalResourceLink" minOccurs="0" maxOccurs="unbounded" type="ern:ExternalResourceLink" />
      // @todo <xs:element name="Keywords" minOccurs="0" maxOccurs="unbounded" type="ern:KeywordsWithTerritory" />
      // @todo <xs:element name="Synopsis" minOccurs="0" maxOccurs="unbounded" type="ern:SynopsisWithTerritory" />
      // @todo <xs:element name="Raga" minOccurs="0" maxOccurs="unbounded" type="ern:Raga" />
      // @todo <xs:element name="Tala" minOccurs="0" maxOccurs="unbounded" type="ern:Tala" />
      // @todo <xs:element name="Deity" minOccurs="0" maxOccurs="unbounded" type="ern:Deity" />
      // @todo <xs:element name="HiResMusicDescription" minOccurs="0" type="xs:string" />
      // @todo <xs:element name="IsSoundtrack" minOccurs="0" type="xs:boolean" />
      // @todo <xs:element name="IsHiResMusic" minOccurs="0" type="xs:boolean" />
      // @todo <xs:element name="MarketingComment" minOccurs="0" maxOccurs="unbounded" type="ern:MarketingComment" />
    };
  }

  private convertReleaseList(ern: Ern383.ReleaseList): Ern411.ReleaseList {
    const release = ern.release
      ?.filter((release) => release._attributes?.isMainRelease)
      .shift();
    const trackReleases = ern.release?.filter(
      (release) => !release._attributes?.isMainRelease,
    );

    return {
      release: release ? this.convertRelease(release) : undefined,
      trackRelease: trackReleases
        ? trackReleases.map((trackRelease) =>
            this.convertTrackRelease(trackRelease),
          )
        : undefined,
    };
  }

  private convertResourceList(ern: Ern383.ResourceList): Ern411.ResourceList {
    return {
      soundRecording: ern.soundRecording
        ? ern.soundRecording.map((soundRecording) =>
            this.convertSoundRecording(soundRecording),
          )
        : undefined,
      image: ern.image
        ? ern.image.map((image) => this.convertImage(image))
        : undefined,
    };
  }

  private convertSoundRecording(
    ern: Ern383.SoundRecording,
  ): Ern411.SoundRecording {
    if (ern.soundRecordingDetailsByTerritory.length > 1) {
      this.logger.warn(
        "sound recording has more than one territory entry, only first entry is used",
      );
    }

    const territory = ern.soundRecordingDetailsByTerritory[0];
    const attributes = {
      languageAndScriptCode: ern._attributes?.languageAndScriptCode,
    };

    return {
      _attributes: ern._attributes ? attributes : undefined,
      resourceReference: ern.resourceReference,
      type: {
        value: Avs411.SoundRecordingType.UNKNOWN,
      },
      resourceId: ern.soundRecordingId,
      displayTitleText: [
        {
          value: ern.referenceTitle.titleText.value,
        },
      ],
      displayTitle: [
        {
          titleText: ern.referenceTitle.titleText.value,
        },
      ],
      displayArtistName: [],
      displayArtist: [],
      duration: ern.duration,
      parentalWarningType: [
        {
          value: Avs411.ParentalWarningType.UNKNOWN,
        },
      ],
      technicalDetails: territory.technicalSoundRecordingDetails
        ? territory.technicalSoundRecordingDetails.map(
            (technicalSoundRecordingDetails) =>
              this.convertTechnicalSoundRecordingDetails(
                technicalSoundRecordingDetails,
              ),
          )
        : undefined,
    };
  }

  private convertTechnicalImageDetails(
    ern: Ern383.TechnicalImageDetails,
  ): Ern411.TechnicalImageDetails {
    if ((ern.file?.length || 0) > 1) {
      this.logger.warn(
        "technical sound recording details has more than one file entry, only first entry is used",
      );
    }

    const attributes = {
      languageAndScriptCode: ern._attributes?.languageAndScriptCode,
    };

    const file = ern.file?.shift();

    return {
      _attributes: ern._attributes ? attributes : undefined,
      technicalResourceDetailsReference: ern.technicalResourceDetailsReference,
      // @todo <xs:element name="ImageCodecType" minOccurs="0" type="ern:ImageCodecType" />
      // @todo <xs:element name="ImageHeight" minOccurs="0" type="ern:Extent" />
      // @todo <xs:element name="ImageWidth" minOccurs="0" type="ern:Extent" />
      // @todo <xs:element name="AspectRatio" minOccurs="0" type="ern:AspectRatio" />
      colorDepth: ern.colorDepth,
      imageResolution: ern.imageResolution,
      isPreview: ern.isPreview,
      // @todo <xs:element name="PreviewDetails" minOccurs="0" type="ern:PreviewDetails" />
      // file: file !== undefined ? this.convertFile(file) : undefined,
      // @todo <xs:element name="Fingerprint" minOccurs="0" maxOccurs="unbounded" type="ern:Fingerprint" />
    };
  }

  private convertTechnicalSoundRecordingDetails(
    ern: Ern383.TechnicalSoundRecordingDetails,
  ): Ern411.TechnicalSoundRecordingDetails {
    if ((ern.file?.length || 0) > 1) {
      this.logger.warn(
        "technical sound recording details has more than one file entry, only first entry is used",
      );
    }

    const attributes = {
      languageAndScriptCode: ern._attributes?.languageAndScriptCode,
    };

    return {
      _attributes: ern._attributes ? attributes : undefined,
      technicalResourceDetailsReference: ern.technicalResourceDetailsReference,
      // @todo <xs:element name="AudioCodecType" minOccurs="0" type="ern:AudioCodecType" />
      // @todo <xs:element name="BitRate" minOccurs="0" type="ern:BitRate" />
      // @todo <xs:element name="OriginalBitRate" minOccurs="0" type="ern:BitRate" />
      numberOfChannels: ern.numberOfChannels,
      // @todo <xs:element name="SamplingRate" minOccurs="0" type="ern:SamplingRate" />
      // @todo <xs:element name="OriginalSamplingRate" minOccurs="0" type="ern:SamplingRate" />
      bitsPerSample: ern.bitsPerSample,
      duration: ern.duration,
      isPreview: ern.isPreview,
      // @todo <xs:element name="PreviewDetails" minOccurs="0" type="ern:SoundRecordingPreviewDetails" />
      // file: ern.file ? this.convertFile(ern.file[0]) : undefined,
      // @todo <xs:element name="Fingerprint" minOccurs="0" maxOccurs="unbounded" type="ern:Fingerprint" />
    };
  }

  private convertTrackRelease(ern: Ern383.Release): Ern411.TrackRelease {
    const attributes = {
      isMainRelease: ern._attributes?.isMainRelease,
    };

    return {
      _attributes: ern._attributes ? attributes : undefined,
      releaseReference: "R0" as Ern411.TrackRelease["releaseReference"],
      releaseId: ern.releaseId as Ern411.TrackRelease["releaseId"],
      // @todo <xs:element name="DisplayTitleText" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayTitleText" />
      // @todo <xs:element name="DisplayTitle" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayTitle" />
      // @todo <xs:element name="AdditionalTitle" minOccurs="0" maxOccurs="unbounded" type="ern:AdditionalTitle" />
      releaseResourceReference:
        ern.releaseResourceReferenceList?.releaseResourceReference.shift()
          ?.value as Ern411.TrackRelease["releaseResourceReference"],
      // @todo <xs:element name="LinkedReleaseResourceReference" minOccurs="0" maxOccurs="unbounded" type="ern:LinkedReleaseResourceReference" />
      releaseLabelReference: [],
      genre: [],
      // @todo <xs:element name="Keywords" minOccurs="0" maxOccurs="unbounded" type="ern:KeywordsWithTerritory" />
      // @todo <xs:element name="Synopsis" minOccurs="0" maxOccurs="unbounded" type="ern:SynopsisWithTerritory" />
      // @todo <xs:element name="MarketingComment" minOccurs="0" maxOccurs="unbounded" type="ern:MarketingComment" />
    };
  }
}
