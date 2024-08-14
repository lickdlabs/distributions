import { Ern411 } from "../../../../../types";
import { parseDelegatedUsageRights } from "./delegatedUsageRights";
import { parseRightShareChoice } from "./rightShareChoice";

export const parseResourceRightsController = (
  object: any,
): Ern411.ResourceRightsController => ({
  _attributes: object.$
    ? {
        sequenceNumber: object.$.SequenceNumber
          ? parseInt(object.$.SequenceNumber)
          : undefined,
      }
    : undefined,
  rightsControllerPartyReference: object.RightsControllerPartyReference[0],
  rightsControllerRole: object.RightsControllerRole
    ? object.RightsControllerRole.map(
        (rightsControllerRole: string) => rightsControllerRole,
      )
    : undefined,
  ...parseRightShareChoice(object),
  delegatedUsageRights: object.DelegatedUsageRights.map(
    (delegatedUsageRights: any) =>
      parseDelegatedUsageRights(delegatedUsageRights),
  ),
});
