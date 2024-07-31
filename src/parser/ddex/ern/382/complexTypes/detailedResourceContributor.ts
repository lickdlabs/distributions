import { Ern382 } from "../../../../../types";
import { parseAllTerritoryCode } from "./allTerritoryCode";
import { parseArtistDelegatedUsageRights } from "./artistDelegatedUsageRights";
import { parseArtistRole } from "./artistRole";
import { parseContactId } from "./contactId";
import { parseCurrentTerritoryCode } from "./currentTerritoryCode";
import { parseEventDate } from "./eventDate";
import { parseGenre } from "./genre";
import { parseGoverningAgreementType } from "./governingAgreementType";
import { parseMembership } from "./membership";
import { parsePartyChoice } from "./partyChoice";
import { parsePerformance } from "./performance";
import { parseResourceContributorRole } from "./resourceContributorRole";

export const parseDetailedResourceContributor = (
  object: any,
): Ern382.DetailedResourceContributor => {
  const attributes = {
    sequenceNumber: object.$?.SequenceNumber
      ? parseInt(object.$.SequenceNumber)
      : undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    ...parsePartyChoice(object),
    resourceContributorRole: object.ResourceContributorRole
      ? object.ResourceContributorRole.map((resourceContributorRole: any) =>
          parseResourceContributorRole(resourceContributorRole),
        )
      : undefined,
    isFeaturedArtist: object.IsFeaturedArtist
      ? object.IsFeaturedArtist[0] === "true"
      : undefined,
    isContractedArtist: object.IsContractedArtist
      ? object.IsContractedArtist[0] === "true"
      : undefined,
    instrumentType: object.InstrumentType
      ? object.InstrumentType.map((instrumentType: string) => instrumentType)
      : undefined,
    artistDelegatedUsageRights: object.ArtistDelegatedUsageRights
      ? parseArtistDelegatedUsageRights(object.ArtistDelegatedUsageRights[0])
      : undefined,
    sex: object.Sex ? object.Sex[0] : undefined,
    nationality: object.Nationality
      ? object.Nationality.map((nationality: string) => nationality)
      : undefined,
    dateAndPlaceOfBirth: object.DateAndPlaceOfBirth
      ? parseEventDate(object.DateAndPlaceOfBirth[0])
      : undefined,
    dateAndPlaceOfDeath: object.DateAndPlaceOfDeath
      ? parseEventDate(object.DateAndPlaceOfDeath[0])
      : undefined,
    primaryRole: object.PrimaryRole
      ? parseArtistRole(object.PrimaryRole[0])
      : undefined,
    performance: object.Performance
      ? object.Performance.map((performance: any) =>
          parsePerformance(performance),
        )
      : undefined,
    primaryInstrumentType: object.PrimaryInstrumentType
      ? object.PrimaryInstrumentType[0]
      : undefined,
    governingAgreementType: object.GoverningAgreementType
      ? parseGoverningAgreementType(object.GoverningAgreementType[0])
      : undefined,
    contactInformation: object.ContactInformation
      ? parseContactId(object.ContactInformation[0])
      : undefined,
    territoryOfResidency: object.TerritoryOfResidency
      ? parseAllTerritoryCode(object.TerritoryOfResidency[0])
      : undefined,
    citizenship: object.Citizenship
      ? parseCurrentTerritoryCode(object.Citizenship[0])
      : undefined,
    additionalRoles: object.AdditionalRoles
      ? object.AdditionalRoles.map((additionalRoles: any) =>
          parseArtistRole(additionalRoles),
        )
      : undefined,
    genre: object.Genre
      ? object.Genre.map((genre: any) => parseGenre(genre))
      : undefined,
    membership: object.Membership
      ? object.Membership.map((membership: any) => parseMembership(membership))
      : undefined,
  };
};
