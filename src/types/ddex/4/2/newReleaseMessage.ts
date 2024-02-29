import * as v411 from "../1/1/newReleaseMessage";

export type TNewReleaseMessage = Omit<
  v411.TNewReleaseMessage,
  "resourceList"
> & {
  // <xs:element name='ResourceList' type='ern:ResourceList'></xs:element>
  resourceList: TResourceList;

  // + <xs:element maxOccurs='unbounded' minOccurs='0' name='ReleaseAdmin' type='ern:ReleaseAdmin'></xs:element>
  // @todo not implemented yet
};

export type TResourceList = Omit<
  v411.TResourceList,
  "soundRecording" | "image"
> & {
  // <xs:element maxOccurs='unbounded' minOccurs='0' name='SoundRecording' type='ern:SoundRecording'></xs:element>
  soundRecording: TSoundRecording[];

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='Image' type='ern:Image'></xs:element>
  image: TImage[];
};

export type TSoundRecording = Omit<v411.TSoundRecording, "technicalDetails"> & {
  // <xs:element maxOccurs='unbounded' minOccurs='0' name='TechnicalDetails' type='ern:TechnicalSoundRecordingDetails'></xs:element>
  technicalDetails: TTechnicalSoundRecordingDetails[];
};

export type TImage = Omit<v411.TImage, "technicalDetails"> & {
  // <xs:element maxOccurs='unbounded' minOccurs='0' name='TechnicalDetails' type='ern:TechnicalImageDetails'></xs:element>
  technicalDetails?: TTechnicalImageDetails[];
};

export type TTechnicalSoundRecordingDetails =
  v411.TTechnicalSoundRecordingDetails & {
    // + <xs:element minOccurs='0' name='EncodingId' type='ern:SoundRecordingId'></xs:element>
    // @todo not implemented yet
    // + <xs:element minOccurs='0' name='IsProvidedInDelivery' type='xs:boolean'></xs:element>
    // @todo not implemented yet
    // + <xs:element minOccurs='0' name='EncodingDescription' type='xs:string'></xs:element>
    // @todo not implemented yet
  };

export type TTechnicalImageDetails = v411.TTechnicalImageDetails & {
  // + <xs:element minOccurs='0' name='IsProvidedInDelivery' type='xs:boolean'></xs:element>
  // @todo not implemented yet
};
