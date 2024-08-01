import { Avs411, Ern383, Ern411 } from "../../../../../types";

export const convertRelease = (ern: Ern383.Release): Ern411.Release => ({
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
});
