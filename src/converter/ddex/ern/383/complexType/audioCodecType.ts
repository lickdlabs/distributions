import { Ern383, Ern411 } from "../../../../../types";

export const convertAudioCodecType = (
  audioCodecType: Ern383.AudioCodecType,
): Ern411.AudioCodecType => ({
  _attributes: audioCodecType._attributes
    ? {
        version: audioCodecType._attributes.version,
        namespace: audioCodecType._attributes.namespace,
        userDefinedValue: audioCodecType._attributes.userDefinedValue,
      }
    : undefined,
  value: audioCodecType.value,
});
