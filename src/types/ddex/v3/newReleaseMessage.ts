import { TFile } from "./common";

export type TNewReleaseMessage = {
  // <xs:element name="ResourceList" type="ern:ResourceList">
  resourceList: TResourceList;
};

export type TResourceList = {
  // <xs:element name="SoundRecording" minOccurs="0" maxOccurs="unbounded" type="ern:SoundRecording">
  soundRecording?: TSoundRecording[];
  // <xs:element name="Image" minOccurs="0" maxOccurs="unbounded" type="ern:Image">
  image?: TImage[];
};

export type TSoundRecording = {
  // <xs:element name="SoundRecordingDetailsByTerritory" maxOccurs="unbounded" type="ern:SoundRecordingDetailsByTerritory">
  soundRecordingDetailsByTerritory: TSoundRecordingDetailsByTerritory[];
};

export type TSoundRecordingDetailsByTerritory = {
  // <xs:element name="TechnicalSoundRecordingDetails" minOccurs="0" maxOccurs="unbounded" type="ern:TechnicalSoundRecordingDetails">
  technicalSoundRecordingDetails?: TTechnicalSoundRecordingDetails[];
};

export type TTechnicalSoundRecordingDetails = {
  // <xs:element name="File" maxOccurs="unbounded" type="ern:File">
  file: TFile[];
};

export type TImage = {
  // <xs:element name="ImageDetailsByTerritory" maxOccurs="unbounded" type="ern:ImageDetailsByTerritory">
  imageDetailsByTerritory: TImageDetailsByTerritory[];
};

export type TImageDetailsByTerritory = {
  // <xs:element name="TechnicalImageDetails" minOccurs="0" maxOccurs="unbounded" type="ern:TechnicalImageDetails">
  technicalImageDetails?: TTechnicalImageDetails[];
};

export type TTechnicalImageDetails = {
  // <xs:element name="File" maxOccurs="unbounded" type="ern:File">
  file: TFile[];
};
