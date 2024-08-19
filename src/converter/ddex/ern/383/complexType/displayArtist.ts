import { Avs20200108, Ern383, Ern411 } from "../../../../../types";
import { findNamePartyReference, findPartyReference } from "../utils";
import { convertDisplayArtistRole } from "./displayArtistRole";

export const convertDisplayArtistFromArtist = (
  parties: Ern411.Party[],
  artist: Ern383.Artist,
): Ern411.DisplayArtist => ({
  _attributes: artist._attributes
    ? {
        sequenceNumber: artist._attributes.sequenceNumber,
      }
    : undefined,
  artistPartyReference: findPartyReference(parties, artist),
  displayArtistRole: convertDisplayArtistRole(artist.artistRole[0]),
  artisticRole: undefined,
  titleDisplayInformation: undefined,
});

export const convertDisplayArtistFromName = (
  parties: Ern411.Party[],
  name: Ern383.Name,
): Ern411.DisplayArtist => ({
  _attributes: undefined,
  artistPartyReference: findNamePartyReference(parties, name),
  displayArtistRole: convertDisplayArtistRole({
    value: Avs20200108.ArtistRole.ARTIST,
  }),
  artisticRole: undefined,
  titleDisplayInformation: undefined,
});
