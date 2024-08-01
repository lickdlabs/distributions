import { Ern411 } from "../../../../../types";
import { parseImage } from "./image";
import { parseSoundRecording } from "./soundRecording";
import { parseText } from "./text";

export const parseResourceList = (object: any): Ern411.ResourceList => ({
  soundRecording: object.SoundRecording
    ? object.SoundRecording.map((soundRecording: any) =>
        parseSoundRecording(soundRecording),
      )
    : undefined,
  // @todo <xs:element name="Video" minOccurs="0" maxOccurs="unbounded" type="ern:Video" />
  image: object.Image
    ? object.Image.map((image: any) => parseImage(image))
    : undefined,
  text: object.Text
    ? object.Text.map((text: any) => parseText(text))
    : undefined,
  // @todo <xs:element name="SheetMusic" minOccurs="0" maxOccurs="unbounded" type="ern:SheetMusic" />
  // @todo <xs:element name="Software" minOccurs="0" maxOccurs="unbounded" type="ern:Software" />
});
