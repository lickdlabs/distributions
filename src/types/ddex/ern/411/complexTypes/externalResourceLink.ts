import { ExternallyLinkedResourceType } from "./externallyLinkedResourceType";
import { PeriodWithoutFlags } from "./periodWithoutFlags";

// <xs:complexType name="ExternalResourceLink">
//   <xs:sequence>
//     <xs:element name="URL" maxOccurs="unbounded" type="xs:string" />
//     <xs:element name="ValidityPeriod" minOccurs="0" type="ern:PeriodWithoutFlags" />
//     <xs:element name="ExternalLink" minOccurs="0" type="xs:string" />
//     <xs:element name="ExternallyLinkedResourceType" minOccurs="0" maxOccurs="unbounded" type="ern:ExternallyLinkedResourceType" />
//     <xs:element name="FileFormat" minOccurs="0" type="xs:string" />
//   </xs:sequence>
// </xs:complexType>
export type ExternalResourceLink = {
  url: string[];
  validityPeriod?: PeriodWithoutFlags;
  externalLink?: string;
  externallyLinkedResourceType?: ExternallyLinkedResourceType[];
  fileFormat?: string;
};
