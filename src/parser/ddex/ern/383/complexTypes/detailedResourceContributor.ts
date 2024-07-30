import { Ern383 } from "../../../../../types";
import { parseGenre } from "./genre";
import { parsePartyChoice } from "./partyChoice";

export const parseDetailedResourceContributor = (
  object: any,
): Ern383.DetailedResourceContributor => {
  const attributes = {
    sequenceNumber: object.$?.SequenceNumber
      ? parseInt(object.$.SequenceNumber)
      : undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    ...parsePartyChoice(object),

    // resourceContributorRole?: ResourceContributorRole[];
    // isFeaturedArtist?: boolean;
    // isContractedArtist?: boolean;
    // instrumentType?: string[];
    // artistDelegatedUsageRights?: ArtistDelegatedUsageRights;
    // sex?: Avs20161006.Sex;
    // nationality?: Avs20161006.CurrentTerritoryCode[];
    // dateAndPlaceOfBirth?: EventDate;
    // dateAndPlaceOfDeath?: EventDate;
    // primaryRole?: ArtistRole;
    // performance?: Performance[];
    primaryInstrumentType: object.PrimaryInstrumentType
      ? object.PrimaryInstrumentType[0]
      : undefined,
    // governingAgreementType?: GoverningAgreementType;
    // contactInformation?: ContactId;
    // territoryOfResidency?: AllTerritoryCode;
    // citizenship?: CurrentTerritoryCode;
    // additionalRoles?: ArtistRole[];
    genre: object.Genre
      ? object.Genre.map((genre: any) => parseGenre(genre))
      : undefined,
    // membership?: Membership[];
  };
};
