import { Ern383 } from "../../../../../types";

export const parseFulfillmentDate = (object: any): Ern383.FulfillmentDate => ({
  fulfillmentDate: new Date(object.FulfillmentDate[0]),
  resourceReleaseReference: object.ResourceReleaseReference[0],
});
