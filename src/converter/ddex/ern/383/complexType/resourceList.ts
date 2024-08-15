import { Ern383, Ern411 } from "../../../../../types";
import { convertImage } from "./image";
import { convertSoundRecording } from "./soundRecording";

export const convertResourceList = (
  parties: Ern411.Party[],
  ern: Ern383.ResourceList,
): Ern411.ResourceList => ({
  soundRecording: ern.soundRecording
    ? ern.soundRecording.map((soundRecording) =>
        convertSoundRecording(
          parties,
          soundRecording,
          soundRecording.soundRecordingDetailsByTerritory[0],
        ),
      )
    : undefined,
  // @todo <xs:element name="Video" minOccurs="0" maxOccurs="unbounded" type="ern:Video" />
  image: ern.image
    ? ern.image.map((image) =>
        convertImage(parties, image, image.imageDetailsByTerritory[0]),
      )
    : undefined,
  text: undefined,
  // @todo <xs:element name="SheetMusic" minOccurs="0" maxOccurs="unbounded" type="ern:SheetMusic" />
  // @todo <xs:element name="Software" minOccurs="0" maxOccurs="unbounded" type="ern:Software" />
});
