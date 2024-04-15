export const convertDuration = (duration: string): number => {
  console.log({ duration });

  const matches = duration.match(
    /^PT(?:(?<hours>\d{1,2})H)?(?:(?<minutes>\d{1,2})M)?(?:(?<seconds>\d{1,2})S)?$/,
  )?.groups;

  if (!matches) {
    throw new Error(`invalid duration '${duration}'`);
  }

  return (
    (parseInt(matches.seconds) || 0) +
    (parseInt(matches.minutes) || 0) * 60 +
    (parseInt(matches.hours) || 0) * 60 * 60
  );
};
