import * as v40 from "../0/newReleaseMessage";

export * from "../0/newReleaseMessage";

export type TNewReleaseMessage = Omit<
  v40.TNewReleaseMessage,
  "resourceList"
> & {
  // <xs:element name='ResourceList' type='ern:ResourceList'></xs:element>
  resourceList: TResourceList;

  // + <xs:element minOccurs='0' name='SupplementalDocumentList' type='ern:SupplementalDocumentList'></xs:element>
  // @todo not implemented yet
};

export type TResourceList = Omit<
  v40.TResourceList,
  "soundRecording" | "image"
> & {
  // <xs:element maxOccurs='unbounded' minOccurs='0' name='SoundRecording' type='ern:SoundRecording'></xs:element>
  soundRecording?: TSoundRecording[];

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='Image' type='ern:Image'></xs:element>
  image?: TImage[];
};

export type TSoundRecording = Omit<v40.TSoundRecording, "technicalDetails"> & {
  // <xs:element maxOccurs='unbounded' minOccurs='0' name='TechnicalDetails' type='ern:TechnicalSoundRecordingDetails'></xs:element>
  technicalDetails?: TTechnicalSoundRecordingDetails[];
};

export type TImage = v40.TImage & {
  // <xs:element maxOccurs='unbounded' minOccurs='0' name='TechnicalDetails' type='ern:TechnicalImageDetails'></xs:element>
  technicalDetails?: TTechnicalImageDetails[];

  // + <xs:element maxOccurs='unbounded' minOccurs='0' name='VersionType' type='ern:VersionType'></xs:element>
  // @todo not implemented yet
  // + <xs:element minOccurs='0' name='CreationDate' type='ern:EventDateWithoutFlags'></xs:element>
  // @todo not implemented yet
  // + <xs:element maxOccurs='unbounded' minOccurs='0' name='RelatedRelease' type='ern:RelatedRelease'></xs:element>
  // @todo not implemented yet
};

export type TTechnicalSoundRecordingDetails = Omit<
  v40.TTechnicalSoundRecordingDetails,
  "file"
> & {
  // <xs:element minOccurs='0' name='File' type='ern:File'></xs:element>
  file?: TFile;
};

export type TTechnicalImageDetails = Omit<
  v40.TTechnicalImageDetails,
  "file"
> & {
  // <xs:element minOccurs='0' name='File' type='ern:File'></xs:element>
  file?: TFile;
};

export type TFile = Omit<v40.TFile, "hashSum"> & {
  // <xs:element minOccurs='0' name='HashSum' type='ern:DetailedHashSum'></xs:element>
  hashSum?: TDetailedHashSum;
};

export type TDetailedHashSum = Omit<v40.TDetailedHashSum, "hashSum"> & {
  // + <xs:element name='HashSumValue' type='xs:string'></xs:element>
  hashSumValue: string;
};
