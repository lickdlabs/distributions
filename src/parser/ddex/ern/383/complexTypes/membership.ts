import { Ern383 } from "../../../../../types";
import { parsePartyDescriptor } from "./partyDescriptor";

export const parseMembership = (object: any): Ern383.Membership => ({
  organization: parsePartyDescriptor(object.Organization[0]),
  membershipType: object.MembershipType[0],
  startDate: object.StartDate ? new Date(object.StartDate[0]) : undefined,
  endDate: object.EndDate ? new Date(object.EndDate[0]) : undefined,
});
