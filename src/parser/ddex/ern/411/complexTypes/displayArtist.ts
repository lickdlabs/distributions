import { Ern411 } from "../../../../../types";
import { parseContributorRole } from "./contributorRole";
import { parseDisplayArtistRole } from "./displayArtistRole";
import { parseTitleDisplayInformation } from "./titleDisplayInformation";

export const parseDisplayArtist = (object: any): Ern411.DisplayArtist => ({
  _attributes: object.$
    ? {
        sequenceNumber: object.$.SequenceNumber
          ? parseInt(object.$.SequenceNumber)
          : undefined,
      }
    : undefined,
  artistPartyReference: object.ArtistPartyReference[0],
  displayArtistRole: parseDisplayArtistRole(object.DisplayArtistRole[0]),
  artisticRole: object.ArtisticRole
    ? object.ArtisticRole.map((artisticRole: any) =>
        parseContributorRole(artisticRole),
      )
    : undefined,
  titleDisplayInformation: object.TitleDisplayInformation
    ? object.TitleDisplayInformation.map((titleDisplayInformation: any) =>
        parseTitleDisplayInformation(titleDisplayInformation),
      )
    : undefined,
});
