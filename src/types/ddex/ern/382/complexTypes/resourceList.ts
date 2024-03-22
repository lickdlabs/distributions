import { Image } from "./image";
import { SoundRecording } from "./soundRecording";

// <xs:complexType name="ResourceList">
//   <xs:sequence>
//     <xs:element name="SoundRecording" minOccurs="0" maxOccurs="unbounded" type="ern:SoundRecording" />
//     <xs:element name="MIDI" minOccurs="0" maxOccurs="unbounded" type="ern:MIDI" />
//     <xs:element name="Video" minOccurs="0" maxOccurs="unbounded" type="ern:Video" />
//     <xs:element name="Image" minOccurs="0" maxOccurs="unbounded" type="ern:Image" />
//     <xs:element name="Text" minOccurs="0" maxOccurs="unbounded" type="ern:Text" />
//     <xs:element name="SheetMusic" minOccurs="0" maxOccurs="unbounded" type="ern:SheetMusic" />
//     <xs:element name="Software" minOccurs="0" maxOccurs="unbounded" type="ern:Software" />
//     <xs:element name="UserDefinedResource" minOccurs="0" maxOccurs="unbounded" type="ern:UserDefinedResource" />
//   </xs:sequence>
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
// </xs:complexType>
export type ResourceList = {
  _attributes?: {
    languageAndScriptCode?: string;
  };

  soundRecording?: SoundRecording[];
  // @todo <xs:element name="MIDI" minOccurs="0" maxOccurs="unbounded" type="ern:MIDI" />
  // @todo <xs:element name="Video" minOccurs="0" maxOccurs="unbounded" type="ern:Video" />
  image?: Image[];
  // @todo <xs:element name="Text" minOccurs="0" maxOccurs="unbounded" type="ern:Text" />
  // @todo <xs:element name="SheetMusic" minOccurs="0" maxOccurs="unbounded" type="ern:SheetMusic" />
  // @todo <xs:element name="Software" minOccurs="0" maxOccurs="unbounded" type="ern:Software" />
  // @todo <xs:element name="UserDefinedResource" minOccurs="0" maxOccurs="unbounded" type="ern:UserDefinedResource" />
};
