import { Ern383 } from "../../../../../types";
import { convertDurationToMilliseconds } from "../../../../../utils";
import { parseFileChoice } from "./fileChoice";

export const parseTechnicalSoundRecordingDetails = (
  object: any,
): Ern383.TechnicalSoundRecordingDetails => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  technicalResourceDetailsReference:
    object.TechnicalResourceDetailsReference[0],
  // @todo <xs:element name="DrmPlatformType" minOccurs="0" type="ern:DrmPlatformType" />
  // @todo <xs:element name="ContainerFormat" minOccurs="0" type="ern:ContainerFormat" />
  // @todo <xs:element name="AudioCodecType" minOccurs="0" type="ern:AudioCodecType" />
  // @todo <xs:element name="BitRate" minOccurs="0" type="ern:BitRate" />
  numberOfChannels: object.NumberOfChannels
    ? parseInt(object.NumberOfChannels[0])
    : undefined,
  // @todo <xs:element name="SamplingRate" minOccurs="0" type="ern:SamplingRate" />
  bitsPerSample: object.BitsPerSample
    ? parseInt(object.BitsPerSample[0])
    : undefined,
  duration: object.Duration
    ? convertDurationToMilliseconds(object.Duration[0])
    : undefined,
  resourceProcessingRequired: object.ResourceProcessingRequired
    ? object.ResourceProcessingRequired[0] === "true"
    : undefined,
  usableResourceDuration: object.UsableResourceDuration
    ? convertDurationToMilliseconds(object.UsableResourceDuration[0])
    : undefined,
  isPreview: object.IsPreview ? object.IsPreview[0] === "true" : undefined,
  // @todo <xs:element name="PreviewDetails" minOccurs="0" type="ern:SoundRecordingPreviewDetails" />
  // @todo <xs:element name="FulfillmentDate" minOccurs="0" type="ern:FulfillmentDate" />
  // @todo <xs:element name="ConsumerFulfillmentDate" minOccurs="0" type="ern:FulfillmentDate" />
  ...parseFileChoice(object),
  // @todo <xs:element name="Fingerprint" minOccurs="0" maxOccurs="unbounded" type="ern:Fingerprint" />
});
