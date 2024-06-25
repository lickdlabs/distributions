import { Image } from "./image";
import { SoundRecording } from "./soundRecording";
import { Text } from "./text";

// <xs:complexType name="ResourceList">
//   <xs:sequence>
//     <xs:element name="SoundRecording" minOccurs="0" maxOccurs="unbounded" type="ern:SoundRecording" />
//     <xs:element name="Video" minOccurs="0" maxOccurs="unbounded" type="ern:Video" />
//     <xs:element name="Image" minOccurs="0" maxOccurs="unbounded" type="ern:Image" />
//     <xs:element name="Text" minOccurs="0" maxOccurs="unbounded" type="ern:Text" />
//     <xs:element name="SheetMusic" minOccurs="0" maxOccurs="unbounded" type="ern:SheetMusic" />
//     <xs:element name="Software" minOccurs="0" maxOccurs="unbounded" type="ern:Software" />
//   </xs:sequence>
// </xs:complexType>
export type ResourceList = {
  soundRecording?: SoundRecording[];
  // @todo <xs:element name="Video" minOccurs="0" maxOccurs="unbounded" type="ern:Video" />
  image?: Image[];
  text?: Text[];
  // @todo <xs:element name="SheetMusic" minOccurs="0" maxOccurs="unbounded" type="ern:SheetMusic" />
  // @todo <xs:element name="Software" minOccurs="0" maxOccurs="unbounded" type="ern:Software" />
};
