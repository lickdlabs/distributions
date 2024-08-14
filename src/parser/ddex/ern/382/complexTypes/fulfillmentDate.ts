import { Ern382 } from "../../../../../types";

export const parseFulfillmentDate = (object: any): Ern382.FulfillmentDate => ({
  fulfillmentDate: new Date(object.FulfillmentDate[0]),
  resourceReleaseReference: object.ResourceReleaseReference[0],
});
