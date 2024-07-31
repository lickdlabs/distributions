import { Ern383 } from "../../../../../types";
import { parseEventDate } from "./eventDate";

export const parsePeriod = (object: any): Ern383.Period => ({
  startDate: object.StartDate ? parseEventDate(object.StartDate[0]) : undefined,
  endDate: object.EndDate ? parseEventDate(object.EndDate[0]) : undefined,
});
