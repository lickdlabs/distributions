import { Ern411 } from "../../../../../types";
import { convertEventDate } from "./eventDate";

export const convertPeriodFromDates = (period: {
  startDate?: Date;
  endDate?: Date;
}): Ern411.Period => ({
  startDate: period.startDate
    ? convertEventDate({
        value: period.startDate,
      })
    : undefined,
  endDate: period.endDate
    ? convertEventDate({
        value: period.endDate,
      })
    : undefined,
});
