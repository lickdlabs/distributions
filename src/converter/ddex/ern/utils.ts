export const findUnique = <T>(og: T[], defaultValue?: T[]): T[] =>
  (og || defaultValue).filter(
    (object, index) =>
      (og || defaultValue).findIndex(
        (item) => JSON.stringify(item) === JSON.stringify(object),
      ) === index,
  );
