import { CatalogNumber } from "./catalogNumber";
import { Icpn } from "./icpn";
import { ProprietaryId } from "./proprietaryId";

// <xs:complexType name="ReleaseId">
//   <xs:sequence>
//     <xs:element name="GRid" minOccurs="0" type="xs:string" />
//     <xs:element name="ISRC" minOccurs="0" type="xs:string" />
//     <xs:element name="ICPN" minOccurs="0" type="ern:ICPN" />
//     <xs:element name="CatalogNumber" minOccurs="0" type="ern:CatalogNumber" />
//     <xs:element name="ProprietaryId" minOccurs="0" maxOccurs="unbounded" type="ern:ProprietaryId" />
//   </xs:sequence>
//   <xs:attribute name="IsReplaced" type="xs:boolean" />
// </xs:complexType>
export type ReleaseId = {
  _attributes?: {
    isReplaced?: boolean;
  };

  grid?: string;
  isrc?: string;
  icpn?: Icpn;
  catalogNumber?: CatalogNumber;
  proprietaryId?: ProprietaryId[];
};
