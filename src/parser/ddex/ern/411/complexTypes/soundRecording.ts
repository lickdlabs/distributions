import { Ern411 } from "../../../../../types";
import { convertDurationToMilliseconds } from "../../../../../utils";
import { parseDisplayArtist } from "./displayArtist";
import { parseDisplayArtistNameWithDefault } from "./displayArtistNameWithDefault";
import { parseDisplayTitle } from "./displayTitle";
import { parseDisplayTitleText } from "./displayTitleText";
import { parseParentalWarningTypeWithTerritory } from "./parentalWarningTypeWithTerritory";
import { parseSoundRecordingId } from "./soundRecordingId";
import { parseSoundRecordingType } from "./soundRecordingType";
import { parseTechnicalSoundRecordingDetails } from "./technicalSoundRecordingDetails";

export const parseSoundRecording = (object: any): Ern411.SoundRecording => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
        isSupplemental: object.$.IsSupplemental
          ? object.$.IsSupplemental === "true"
          : undefined,
      }
    : undefined,
  resourceReference: object.ResourceReference[0],
  type: parseSoundRecordingType(object.Type[0]),
  resourceId: object.ResourceId.map((resourceId: any) =>
    parseSoundRecordingId(resourceId),
  ),
  displayTitleText: object.DisplayTitleText.map((displayTitleText: any) =>
    parseDisplayTitleText(displayTitleText),
  ),
  displayTitle: object.DisplayTitle.map((displayTitle: any) =>
    parseDisplayTitle(displayTitle),
  ),
  displayArtistName: object.DisplayArtistName.map((displayArtistName: any) =>
    parseDisplayArtistNameWithDefault(displayArtistName),
  ),
  displayArtist: object.DisplayArtist.map((displayArtist: any) =>
    parseDisplayArtist(displayArtist),
  ),
  duration: convertDurationToMilliseconds(object.Duration[0]),
  parentalWarningType: object.ParentalWarningType.map(
    (parentalWarningType: any) =>
      parseParentalWarningTypeWithTerritory(parentalWarningType),
  ),
  technicalDetails: object.TechnicalDetails
    ? object.TechnicalDetails.map((technicalDetails: any) =>
        parseTechnicalSoundRecordingDetails(technicalDetails),
      )
    : undefined,
});
