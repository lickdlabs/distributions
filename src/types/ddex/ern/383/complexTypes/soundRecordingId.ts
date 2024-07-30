import { CatalogNumber } from "./catalogNumber";
import { ProprietaryId } from "./proprietaryId";

// <xs:complexType name="SoundRecordingId">
//   <xs:sequence>
//     <xs:element name="ISRC" minOccurs="0" type="xs:string" />
//     <xs:element name="CatalogNumber" minOccurs="0" type="ern:CatalogNumber" />
//     <xs:element name="ProprietaryId" minOccurs="0" maxOccurs="unbounded" type="ern:ProprietaryId" />
//   </xs:sequence>
//   <xs:attribute name="IsReplaced" type="xs:boolean" />
// </xs:complexType>
export type SoundRecordingId = {
  _attributes?: {
    isReplaced?: boolean;
  };

  isrc?: string;
  catalogNumber?: CatalogNumber;
  proprietaryId?: ProprietaryId[];
};
