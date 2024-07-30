import { Ern383 } from "../../../../../types";
import { parseImage } from "./image";
import { parseSoundRecording } from "./soundRecording";

export const parseResourceList = (object: any): Ern383.ResourceList => {
  const attributes = {
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    soundRecording: object.SoundRecording
      ? object.SoundRecording.map((soundRecording: any) =>
          parseSoundRecording(soundRecording),
        )
      : undefined,
    image: object.Image
      ? object.Image.map((image: any) => parseImage(image))
      : undefined,
  };
};
