import { Ern382, Ern383 } from "../../../../../types";
import { convertDetailedResourceContributor } from "./detailedResourceContributor";

export const convertCharacter = (
  character: Ern382.Character,
): Ern383.Character => ({
  ...character,
  resourceContributor: character.resourceContributor
    ? convertDetailedResourceContributor(character.resourceContributor)
    : undefined,
});
