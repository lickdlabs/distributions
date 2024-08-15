import { Ern382, Ern383 } from "../../../../../types";
import { convertImage } from "./image";
import { convertSoundRecording } from "./soundRecording";

export const convertResourceList = (
  resourceList: Ern382.ResourceList,
): Ern383.ResourceList => ({
  ...resourceList,
  soundRecording: resourceList.soundRecording?.map((soundRecording) =>
    convertSoundRecording(soundRecording),
  ),
  image: resourceList.image?.map((image) => convertImage(image)),
});
