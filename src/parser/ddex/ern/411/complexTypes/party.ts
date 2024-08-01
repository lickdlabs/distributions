import { Ern411 } from "../../../../../types";
import { parseAffiliation } from "./affiliation";
import { parsePartyChoice } from "./partyChoice";
import { parseRelatedParty } from "./relatedParty";

export const parseParty = (object: any): Ern411.Party => ({
  partyReference: object.PartyReference[0],
  ...parsePartyChoice(object),
  affiliation: object.Affiliation
    ? object.Affiliation.map((affiliation: any) =>
        parseAffiliation(affiliation),
      )
    : undefined,
  relatedParty: object.RelatedParty
    ? object.RelatedParty.map((relatedParty: any) =>
        parseRelatedParty(relatedParty),
      )
    : undefined,
  artistProfilePage: object.ArtistProfilePage
    ? object.ArtistProfilePage.map(
        (artistProfilePage: string) => artistProfilePage,
      )
    : undefined,
});
