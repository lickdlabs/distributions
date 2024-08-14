import { CLine } from "./cLine";
import { CourtesyLine } from "./courtesyLine";
import { Description } from "./description";
import { DetailedResourceContributor } from "./detailedResourceContributor";
import { EventDate } from "./eventDate";
import { FulfillmentDate } from "./fulfillmentDate";
import { Genre } from "./genre";
import { IndirectResourceContributor } from "./indirectResourceContributor";
import { Keywords } from "./keywords";
import { Name } from "./name";
import { ParentalWarningType } from "./parentalWarningType";
import { Synopsis } from "./synopsis";
import { TechnicalImageDetails } from "./technicalImageDetails";
import { TerritoryCodeChoice } from "./territoryCodeChoice";
import { Title } from "./title";

// <xs:complexType name="ImageDetailsByTerritory">
//   <xs:sequence>
//     <xs:choice>
//       <xs:element name="TerritoryCode" maxOccurs="unbounded" type="ern:CurrentTerritoryCode" />
//       <xs:element name="ExcludedTerritoryCode" maxOccurs="unbounded" type="ern:CurrentTerritoryCode" />
//     </xs:choice>
//     <xs:element name="Title" minOccurs="0" maxOccurs="unbounded" type="ern:Title" />
//     <xs:element name="ResourceContributor" minOccurs="0" maxOccurs="unbounded" type="ern:DetailedResourceContributor" />
//     <xs:element name="IndirectResourceContributor" minOccurs="0" maxOccurs="unbounded" type="ern:IndirectResourceContributor" />
//     <xs:element name="DisplayArtistName" minOccurs="0" maxOccurs="unbounded" type="ern:Name" />
//     <xs:element name="CLine" minOccurs="0" maxOccurs="unbounded" type="ern:CLine" />
//     <xs:element name="Description" minOccurs="0" type="ern:Description" />
//     <xs:element name="CourtesyLine" minOccurs="0" type="ern:CourtesyLine" />
//     <xs:element name="ResourceReleaseDate" minOccurs="0" type="ern:EventDate" />
//     <xs:element name="OriginalResourceReleaseDate" minOccurs="0" type="ern:EventDate" />
//     <xs:element name="FulfillmentDate" minOccurs="0" type="ern:FulfillmentDate" />
//     <xs:element name="Keywords" minOccurs="0" maxOccurs="unbounded" type="ern:Keywords" />
//     <xs:element name="Synopsis" minOccurs="0" type="ern:Synopsis" />
//     <xs:element name="Genre" minOccurs="0" maxOccurs="unbounded" type="ern:Genre" />
//     <xs:element name="ParentalWarningType" minOccurs="0" maxOccurs="unbounded" type="ern:ParentalWarningType" />
//     <xs:element name="TechnicalImageDetails" minOccurs="0" maxOccurs="unbounded" type="ern:TechnicalImageDetails" />
//   </xs:sequence>
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
// </xs:complexType>
export type ImageDetailsByTerritory = TerritoryCodeChoice & {
  _attributes?: {
    languageAndScriptCode?: string;
  };

  title?: Title[];
  resourceContributor?: DetailedResourceContributor[];
  indirectResourceContributor?: IndirectResourceContributor[];
  displayArtistName?: Name[];
  cLine?: CLine[];
  description?: Description;
  courtesyLine?: CourtesyLine;
  resourceReleaseDate?: EventDate;
  originalResourceReleaseDate?: EventDate;
  fulfillmentDate?: FulfillmentDate;
  keywords?: Keywords[];
  synopsis?: Synopsis;
  genre?: Genre[];
  parentalWarningType?: ParentalWarningType[];
  technicalImageDetails?: TechnicalImageDetails[];
};
