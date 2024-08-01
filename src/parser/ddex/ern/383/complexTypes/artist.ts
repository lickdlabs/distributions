import { Ern383 } from "../../../../../types";
import { parseArtistRole } from "./artistRole";
import { parsePartyChoice } from "./partyChoice";

export const parseArtist = (object: any): Ern383.Artist => ({
  _attributes: object.$
    ? {
        sequenceNumber: object.$.SequenceNumber
          ? parseInt(object.$.SequenceNumber)
          : undefined,
      }
    : undefined,
  ...parsePartyChoice(object),
  artistRole: object.ArtistRole.map((artistRole: any) =>
    parseArtistRole(artistRole),
  ),
  nationality: object.Nationality
    ? object.Nationality.map((nationality: string) => nationality)
    : undefined,
});
