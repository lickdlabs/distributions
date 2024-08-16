import { Ern383, Ern411 } from "../../../../../types";
import { findPartyReference } from "../utils";
import { convertDelegatedUsageRights } from "./delegatedUsageRights";
import { convertRightShareChoice } from "./rightShareChoice";

export const convertResourceRightsController = (
  parties: Ern411.Party[],
  resourceRightsController: Ern383.TypedRightsController,
): Ern411.ResourceRightsController => ({
  _attributes: resourceRightsController._attributes
    ? {
        sequenceNumber: resourceRightsController._attributes.sequenceNumber,
      }
    : undefined,
  rightsControllerPartyReference: findPartyReference(
    parties,
    resourceRightsController,
  ),
  rightsControllerRole: resourceRightsController.rightsControllerRole,
  ...convertRightShareChoice(resourceRightsController),
  delegatedUsageRights: [convertDelegatedUsageRights(resourceRightsController)],
});
