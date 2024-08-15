import { Ern382 } from "../../../../../types";
import { parseAdministratingRecordCompany } from "./administratingRecordCompany";
import { parseArtist } from "./artist";
import { parseReleaseId } from "./releaseId";
import { parseRightsAgreementId } from "./rightsAgreementId";
import { parseTitle } from "./title";

export const parseHostSoundCarrier = (
  object: any,
): Ern382.HostSoundCarrier => ({
  releaseId: object.ReleaseId
    ? object.ReleaseId.map((releaseId: any) => parseReleaseId(releaseId))
    : undefined,
  rightsAgreementId: object.RightsAgreementId
    ? parseRightsAgreementId(object.RightsAgreementId[0])
    : undefined,
  title: object.Title
    ? object.Title.map((title: any) => parseTitle(title))
    : undefined,
  displayArtist: object.DisplayArtist
    ? object.DisplayArtist.map((displayArtist: any) =>
        parseArtist(displayArtist),
      )
    : undefined,
  administratingRecordCompany: object.AdministratingRecordCompany
    ? object.AdministratingRecordCompany.map(
        (administratingRecordCompany: any) =>
          parseAdministratingRecordCompany(administratingRecordCompany),
      )
    : undefined,
  trackNumber: object.TrackNumber ? object.TrackNumber[0] : undefined,
  volumeNumberInSet: object.VolumeNumberInSet
    ? object.VolumeNumberInSet[0]
    : undefined,
});
