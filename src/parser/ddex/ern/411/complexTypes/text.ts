import { Ern411 } from "../../../../../types";
import { parseTechnicalTextDetails } from "./technicalTextDetails";
import { parseTextType } from "./textType";

export const parseText = (object: any): Ern411.Text => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
        isSupplemental: object.$.IsSupplemental
          ? object.$.IsSupplemental === "true"
          : undefined,
      }
    : undefined,
  resourceReference: object.ResourceReference[0],
  type: parseTextType(object.TextType[0]),
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
        parseTechnicalTextDetails(technicalDetails),
      )
    : undefined,
});
