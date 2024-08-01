import { Ern383, Ern411 } from "../../../../../types";
import { convertImage } from "./image";
import { convertSoundRecording } from "./soundRecording";

export const convertResourceList = (
  ern: Ern383.ResourceList,
): Ern411.ResourceList => ({
  soundRecording: ern.soundRecording
    ? ern.soundRecording.map((soundRecording) =>
        convertSoundRecording(soundRecording),
      )
    : undefined,
  image: ern.image ? ern.image.map((image) => convertImage(image)) : undefined,
});
