import { SoundRecordingCollectionReference } from "./soundRecordingCollectionReference";

// <xs:complexType name="SoundRecordingCollectionReferenceList">
//   <xs:sequence>
//     <xs:element name="NumberOfCollections" minOccurs="0" type="xs:integer" />
//     <xs:element name="SoundRecordingCollectionReference" maxOccurs="unbounded" type="ern:SoundRecordingCollectionReference" />
//   </xs:sequence>
// </xs:complexType>
export type SoundRecordingCollectionReferenceList = {
  numberOfCollections?: number;
  soundRecordingCollectionReference: SoundRecordingCollectionReference[];
};
