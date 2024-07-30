import { Ern382 } from "../../../../../types";
import { parseDescription } from "./description";
import { parseFile } from "./file";

export const parseFileChoice = (object: any): Ern382.FileChoice => {
  if (object.FileAvailabilityDescription) {
    return object.FileAvailabilityDescription.map(
      (fileAvailabilityDescription: any) =>
        parseDescription(fileAvailabilityDescription),
    );
  }

  return object.File.map((file: any) => parseFile(file));
};

export const parsePartialFileChoice = (
  object: any,
): Partial<Ern382.FileChoice> => {
  if (object.FileAvailabilityDescription) {
    return object.FileAvailabilityDescription.map(
      (fileAvailabilityDescription: any) =>
        parseDescription(fileAvailabilityDescription),
    );
  }

  if (object.File) {
    return object.File.map((file: any) => parseFile(file));
  }

  return {};
};
