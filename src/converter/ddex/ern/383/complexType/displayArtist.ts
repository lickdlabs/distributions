import { Ern383, Ern411 } from "../../../../../types";
import { findArtistPartyReference, findNamePartyReference } from "../utils";
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
  artistPartyReference: findArtistPartyReference(parties, artist),
  displayArtistRole: convertDisplayArtistRole(),
  artisticRole: undefined,
  titleDisplayInformation: undefined,
});

export const convertDisplayArtistFromName = (
  parties: Ern411.Party[],
  name: Ern383.Name,
): Ern411.DisplayArtist => ({
  _attributes: undefined,
  artistPartyReference: findNamePartyReference(parties, name),
  displayArtistRole: convertDisplayArtistRole(),
  artisticRole: undefined,
  titleDisplayInformation: undefined,
});
