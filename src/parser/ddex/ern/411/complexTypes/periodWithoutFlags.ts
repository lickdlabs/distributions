import { Ern411 } from "../../../../../types";
import { parseEventDateWithoutFlags } from "./eventDateWithoutFlags";

export const parsePeriodWithoutFlags = (
  object: any,
): Ern411.PeriodWithoutFlags => ({
  startDate: object.StartDate
    ? parseEventDateWithoutFlags(object.StartDate[0])
    : undefined,
  endDate: object.EndDate
    ? parseEventDateWithoutFlags(object.EndDate[0])
    : undefined,
});
