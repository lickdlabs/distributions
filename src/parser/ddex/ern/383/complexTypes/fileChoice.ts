import { Ern383 } from "../../../../../types";
import { parseDescription } from "./description";
import { parseFile } from "./file";

export const parseFileChoice = (object: any): Ern383.FileChoice => {
  if (object.FileAvailabilityDescription) {
    return {
      fileAvailabilityDescription: object.FileAvailabilityDescription.map(
        (fileAvailabilityDescription: any) =>
          parseDescription(fileAvailabilityDescription),
      ),
    };
  }

  return {
    file: object.File.map((file: any) => parseFile(file)),
  };
};

export const parsePartialFileChoice = (
  object: any,
): Partial<Ern383.FileChoice> => {
  if (object.FileAvailabilityDescription) {
    return {
      fileAvailabilityDescription: object.FileAvailabilityDescription.map(
        (fileAvailabilityDescription: any) =>
          parseDescription(fileAvailabilityDescription),
      ),
    };
  }

  if (object.File) {
    return {
      file: object.File.map((file: any) => parseFile(file)),
    };
  }

  return {};
};
