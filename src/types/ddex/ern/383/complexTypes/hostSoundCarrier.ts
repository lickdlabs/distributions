import { AdministratingRecordCompany } from "./administratingRecordCompany";
import { Artist } from "./artist";
import { ReleaseId } from "./releaseId";
import { RightsAgreementId } from "./rightsAgreementId";
import { Title } from "./title";

// <xs:complexType name="HostSoundCarrier">
//   <xs:sequence>
//     <xs:element name="ReleaseId" minOccurs="0" maxOccurs="unbounded" type="ern:ReleaseId" />
//     <xs:element name="RightsAgreementId" minOccurs="0" type="ern:RightsAgreementId" />
//     <xs:element name="Title" minOccurs="0" maxOccurs="unbounded" type="ern:Title" />
//     <xs:element name="DisplayArtist" minOccurs="0" maxOccurs="unbounded" type="ern:Artist" />
//     <xs:element name="AdministratingRecordCompany" minOccurs="0" maxOccurs="unbounded" type="ern:AdministratingRecordCompany" />
//     <xs:element name="TrackNumber" minOccurs="0" type="xs:string" />
//     <xs:element name="VolumeNumberInSet" minOccurs="0" type="xs:string" />
//   </xs:sequence>
// </xs:complexType>
export type HostSoundCarrier = {
  releaseId?: ReleaseId[];
  rightsAgreementId?: RightsAgreementId;
  title?: Title[];
  displayArtist?: Artist[];
  administratingRecordCompany?: AdministratingRecordCompany[];
  trackNumber?: string;
  volumeNumberInSet?: string;
};
