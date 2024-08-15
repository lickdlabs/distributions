import { Ern382 } from "../../../../../types";
import { parseSoundRecordingCollectionReference } from "./soundRecordingCollectionReference";

export const parseSoundRecordingCollectionReferenceList = (
  object: any,
): Ern382.SoundRecordingCollectionReferenceList => ({
  numberOfCollections: object.NumberOfCollections
    ? parseInt(object.NumberOfCollections[0])
    : undefined,
  soundRecordingCollectionReference:
    object.SoundRecordingCollectionReference.map(
      (soundRecordingCollectionReference: any) =>
        parseSoundRecordingCollectionReference(
          soundRecordingCollectionReference,
        ),
    ),
});
