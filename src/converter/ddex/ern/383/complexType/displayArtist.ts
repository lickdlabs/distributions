import { Ern383, Ern411 } from "../../../../../types";
import { findArtistPartyReference } from "../utils";
import { convertDisplayArtistRole } from "./displayArtistRole";

export const convertDisplayArtist = (
  parties: Ern411.Party[],
  artist: Ern383.Artist,
): Ern411.DisplayArtist => ({
  _attributes: artist._attributes
    ? {
        sequenceNumber: artist._attributes.sequenceNumber,
      }
    : undefined,
  artistPartyReference: findArtistPartyReference(parties, artist),
  displayArtistRole: convertDisplayArtistRole(),
  artisticRole: undefined,
  titleDisplayInformation: undefined,
});
