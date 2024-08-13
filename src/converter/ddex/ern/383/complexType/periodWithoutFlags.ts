import { Ern383, Ern411 } from "../../../../../types";
import { convertEventDateWithoutFlags } from "./eventDateWithoutFlags";

export const convertPeriodWithoutFlags = (
  period: Ern383.Period,
): Ern411.PeriodWithoutFlags => ({
  startDate: period.startDate
    ? convertEventDateWithoutFlags(period.startDate)
    : undefined,
  endDate: period.endDate
    ? convertEventDateWithoutFlags(period.endDate)
    : undefined,
});
