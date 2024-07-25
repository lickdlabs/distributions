import { TerritoryCodeChoice } from "./territoryCodeChoice";

// <xs:complexType name="ReleaseDetailsByTerritory">
//   <xs:sequence>
//     <xs:choice>
//       <xs:element name="TerritoryCode" maxOccurs="unbounded" type="ern:CurrentTerritoryCode" />
//       <xs:element name="ExcludedTerritoryCode" maxOccurs="unbounded" type="ern:CurrentTerritoryCode" />
//     </xs:choice>
//     <xs:element name="DisplayArtistName" minOccurs="0" maxOccurs="unbounded" type="ern:Name" />
//     <xs:element name="LabelName" minOccurs="0" maxOccurs="unbounded" type="ern:LabelName" />
//     <xs:element name="RightsAgreementId" minOccurs="0" type="ern:RightsAgreementId" />
//     <xs:element name="Title" minOccurs="0" maxOccurs="unbounded" type="ern:Title" />
//     <xs:element name="DisplayArtist" minOccurs="0" maxOccurs="unbounded" type="ern:Artist" />
//     <xs:element name="IsMultiArtistCompilation" minOccurs="0" type="xs:boolean" />
//     <xs:element name="AdministratingRecordCompany" minOccurs="0" maxOccurs="unbounded" type="ern:AdministratingRecordCompany" />
//     <xs:element name="ReleaseType" minOccurs="0" maxOccurs="unbounded" type="ern:ReleaseType" />
//     <xs:element name="RelatedRelease" minOccurs="0" maxOccurs="unbounded" type="ern:RelatedRelease" />
//     <xs:element name="ParentalWarningType" minOccurs="0" maxOccurs="unbounded" type="ern:ParentalWarningType" />
//     <xs:element name="AvRating" minOccurs="0" maxOccurs="unbounded" type="ern:AvRating" />
//     <xs:element name="MarketingComment" minOccurs="0" type="ern:Comment" />
//     <xs:element name="ResourceGroup" minOccurs="0" maxOccurs="unbounded" type="ern:ResourceGroup" />
//     <xs:element name="Genre" minOccurs="0" maxOccurs="unbounded" type="ern:Genre" />
//     <xs:element name="PLine" minOccurs="0" maxOccurs="unbounded" type="ern:PLine" />
//     <xs:element name="CLine" minOccurs="0" maxOccurs="unbounded" type="ern:CLine" />
//     <xs:element name="ReleaseDate" minOccurs="0" type="ern:EventDate" />
//     <xs:element name="OriginalReleaseDate" minOccurs="0" type="ern:EventDate" />
//     <xs:element name="OriginalDigitalReleaseDate" minOccurs="0" type="ern:EventDate" />
//     <xs:choice minOccurs="0">
//       <xs:element name="FileAvailabilityDescription" maxOccurs="unbounded" type="ern:Description" />
//       <xs:element name="File" maxOccurs="unbounded" type="ern:File" />
//     </xs:choice>
//     <xs:element name="Keywords" minOccurs="0" maxOccurs="unbounded" type="ern:Keywords" />
//     <xs:element name="Synopsis" minOccurs="0" type="ern:Synopsis" />
//     <xs:element name="Character" minOccurs="0" maxOccurs="unbounded" type="ern:Character" />
//     <xs:element name="NumberOfUnitsPerPhysicalRelease" minOccurs="0" type="xs:integer" />
//     <xs:element name="DisplayConductor" minOccurs="0" maxOccurs="unbounded" type="ern:Artist" />
//   </xs:sequence>
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
// </xs:complexType>
export type ReleaseDetailsByTerritory = TerritoryCodeChoice & {
  _attributes?: {
    languageAndScriptCode?: string;
  };

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
