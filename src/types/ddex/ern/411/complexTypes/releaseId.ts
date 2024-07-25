import { CatalogNumber } from "./catalogNumber";
import { ProprietaryId } from "./proprietaryId";

// <xs:complexType name="ReleaseId">
//   <xs:sequence>
//     <xs:element name="GRid" minOccurs="0" type="xs:string" />
//     <xs:element name="ISRC" minOccurs="0" type="xs:string" />
//     <xs:element name="ICPN" minOccurs="0" type="xs:string" />
//     <xs:element name="CatalogNumber" minOccurs="0" type="ern:CatalogNumber" />
//     <xs:element name="ProprietaryId" minOccurs="0" maxOccurs="unbounded" type="ern:ProprietaryId" />
//   </xs:sequence>
// </xs:complexType>
export type ReleaseId = {
  grid?: string;
  isrc?: string;
  icpn?: string;
  catalogNumber?: CatalogNumber;
  proprietaryId?: ProprietaryId[];
};
