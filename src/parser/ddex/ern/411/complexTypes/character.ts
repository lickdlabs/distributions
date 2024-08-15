import { Ern411 } from "../../../../../types";
import { parseContributor } from "./contributor";

export const parseCharacter = (object: any): Ern411.Character => ({
  _attributes: object.$
    ? {
        sequenceNumber: object.$.SequenceNumber
          ? parseInt(object.$.SequenceNumber)
          : undefined,
      }
    : undefined,
  characterPartyReference: object.CharacterPartyReference[0],
  performer: object.Performer
    ? parseContributor(object.Performer[0])
    : undefined,
});
