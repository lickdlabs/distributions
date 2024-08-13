import { Ern383, Ern411 } from "../../../../../types";
import { convertFile } from "./file";

export const convertTechnicalSoundRecordingDetails = (
  ern: Ern383.TechnicalSoundRecordingDetails,
): Ern411.TechnicalSoundRecordingDetails => ({
  _attributes: ern._attributes
    ? {
        languageAndScriptCode: ern._attributes?.languageAndScriptCode,
        applicableTerritoryCode: undefined,
        isDefault: undefined,
      }
    : undefined,
  technicalResourceDetailsReference: ern.technicalResourceDetailsReference,
  // @todo <xs:element name="AudioCodecType" minOccurs="0" type="ern:AudioCodecType" />
  // @todo <xs:element name="BitRate" minOccurs="0" type="ern:BitRate" />
  // @todo <xs:element name="OriginalBitRate" minOccurs="0" type="ern:BitRate" />
  numberOfChannels: ern.numberOfChannels,
  // @todo <xs:element name="SamplingRate" minOccurs="0" type="ern:SamplingRate" />
  // @todo <xs:element name="OriginalSamplingRate" minOccurs="0" type="ern:SamplingRate" />
  bitsPerSample: ern.bitsPerSample,
  duration: ern.duration,
  isPreview: ern.isPreview,
  // @todo <xs:element name="PreviewDetails" minOccurs="0" type="ern:SoundRecordingPreviewDetails" />
  file: ern.file ? convertFile(ern.file[0]) : undefined,
  // @todo <xs:element name="Fingerprint" minOccurs="0" maxOccurs="unbounded" type="ern:Fingerprint" />
});
