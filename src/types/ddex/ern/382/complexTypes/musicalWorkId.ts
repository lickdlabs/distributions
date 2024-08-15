import { ProprietaryId } from "./proprietaryId";

// <xs:complexType name="MusicalWorkId">
//   <xs:sequence>
//     <xs:element name="ISWC" minOccurs="0" type="xs:string" />
//     <xs:element name="OpusNumber" minOccurs="0" type="xs:string" />
//     <xs:element name="ComposerCatalogNumber" minOccurs="0" maxOccurs="unbounded" type="xs:string" />
//     <xs:element name="ProprietaryId" minOccurs="0" maxOccurs="unbounded" type="ern:ProprietaryId" />
//   </xs:sequence>
//   <xs:attribute name="IsReplaced" type="xs:boolean" />
// </xs:complexType>
export type MusicalWorkId = {
  _attributes?: {
    isReplaced?: boolean;
  };

  iswc?: string;
  opusNumber?: string;
  composerCatalogNumber?: string[];
  proprietaryId?: ProprietaryId[];
};
