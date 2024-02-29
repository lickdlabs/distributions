import * as v42 from "../2/newReleaseMessage";

export * from "../2/newReleaseMessage";

export type TNewReleaseMessage = Omit<
  v42.TNewReleaseMessage,
  "resourceList"
> & {
  // <xs:element name='ResourceList' type='ern:ResourceList'></xs:element>
  resourceList: TResourceList;

  // + <xs:element minOccurs='0' name='CueSheetList' type='ern:CueSheetList'></xs:element>
  // @todo not implemented yet
};

export type TResourceList = Omit<
  v42.TResourceList,
  "soundRecording" | "image"
> & {
  // <xs:element maxOccurs='unbounded' minOccurs='0' name='SoundRecording' type='ern:SoundRecording'></xs:element>
  soundRecording: TSoundRecording[];

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='Image' type='ern:Image'></xs:element>
  image: TImage[];
};

export type TSoundRecording = Omit<v42.TSoundRecording, "technicalDetails"> & {
  // <xs:element maxOccurs='unbounded' minOccurs='0' name='TechnicalDetails' type='ern:TechnicalSoundRecordingDetails'></xs:element>
  technicalDetails: TTechnicalSoundRecordingDetails[];
};

export type TImage = Omit<v42.TImage, "technicalDetails"> & {
  // <xs:element maxOccurs='unbounded' minOccurs='0' name='TechnicalDetails' type='ern:TechnicalImageDetails'></xs:element>
  technicalDetails?: TTechnicalImageDetails[];
};

export type TTechnicalSoundRecordingDetails =
  v42.TTechnicalSoundRecordingDetails & {
    // <xs:element name='TechnicalResourceDetailsReference'>
    //     <xs:simpleType>
    //         <xs:restriction base='xs:ID'>
    //             <xs:pattern value='T[\d\-_a-zA-Z]+' />
    //         </xs:restriction>
    //     </xs:simpleType>
    // </xs:element>
    // @todo not implemented yet
    // <xs:element maxOccurs='unbounded' minOccurs='0' name='DeliveryFile' type='ern:AudioDeliveryFile'></xs:element>
    // @todo not implemented yet
    // <xs:element minOccurs='0' name='HasImmersiveAudioMetadata' type='xs:boolean'></xs:element>
    // @todo not implemented yet
    // <xs:element minOccurs='0' name='IsClip' type='xs:boolean'></xs:element>
    // @todo not implemented yet
    // <xs:element maxOccurs='unbounded' minOccurs='0' name='ClipDetails' type='ern:SoundRecordingClipDetails'></xs:element>
    // @todo not implemented yet
  };

export type TTechnicalImageDetails = Omit<
  v42.TTechnicalImageDetails,
  "isPreview" | "previewDetails"
> & {
  // + <xs:element maxOccurs='unbounded' minOccurs='0' name='AspectRatio' type='ern:AspectRatio'></xs:element>
  // @todo not implemented yet
  // + <xs:element minOccurs='0' name='IsClip' type='xs:boolean'></xs:element>
  // @todo not implemented yet
  // + <xs:element maxOccurs='unbounded' minOccurs='0' name='ClipDetails' type='ern:ClipDetails'></xs:element>
  // @todo not implemented yet
};
