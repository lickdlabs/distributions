import { InvalidError } from "./errors";

export const parseBoolean = (value: any): boolean => value === "true";

export const convertDurationToMilliseconds = (duration: string): number => {
  const matches = duration.match(
    /^PT(?:(?<hours>\d+)H)?(?:(?<minutes>\d+)M)?(?:(?<seconds>\d+|\d+\.\d+)S)?$/,
  )?.groups;

  if (!matches) {
    throw new InvalidError(`invalid duration '${duration}'`);
  }

  return Math.round(
    ((parseFloat(matches.seconds) || 0) +
      (parseInt(matches.minutes) || 0) * 60 +
      (parseInt(matches.hours) || 0) * 60 * 60) *
      1000,
  );
};

export const findUnique = <T>(og: T[], defaultValue?: T[]): T[] =>
  (og || defaultValue).filter(
    (object, index) =>
      (og || defaultValue).findIndex(
        (item) => JSON.stringify(item) === JSON.stringify(object),
      ) === index,
  );
