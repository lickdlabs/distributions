import { Ern383 } from "../../../../../types";
import { parseImage } from "./image";
import { parseSoundRecording } from "./soundRecording";

export const parseResourceList = (object: any): Ern383.ResourceList => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  soundRecording: object.SoundRecording
    ? object.SoundRecording.map((soundRecording: any) =>
        parseSoundRecording(soundRecording),
      )
    : undefined,
  image: object.Image
    ? object.Image.map((image: any) => parseImage(image))
    : undefined,
});
