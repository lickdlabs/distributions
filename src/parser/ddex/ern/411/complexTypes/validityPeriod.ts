import { Ern411 } from "../../../../../types";
import { parseEventDate } from "./eventDate";

export const parseValidityPeriod = (object: any): Ern411.ValidityPeriod => ({
  startDate: object.StartDate ? parseEventDate(object.StartDate[0]) : undefined,
  endDate: object.EndDate ? parseEventDate(object.EndDate[0]) : undefined,
});
