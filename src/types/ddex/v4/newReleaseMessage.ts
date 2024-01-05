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
  // <xs:element name="TechnicalDetails" minOccurs="0" maxOccurs="unbounded" type="ern:TechnicalSoundRecordingDetails">
  technicalDetails?: TTechnicalSoundRecordingDetails[];
};

export type TTechnicalSoundRecordingDetails = {
  // <xs:element name="File" minOccurs="0" type="ern:File">
  file?: TFile;
};

export type TImage = {
  // <xs:element name="TechnicalDetails" minOccurs="0" maxOccurs="unbounded" type="ern:TechnicalImageDetails">
  technicalDetails?: TTechnicalImageDetails[];
};

export type TTechnicalImageDetails = {
  // <xs:element name="File" minOccurs="0" type="ern:File">
  file?: TFile;
};
