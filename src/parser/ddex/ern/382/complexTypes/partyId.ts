import { Ern382 } from "../../../../../types";

export const parsePartyId = (object: any): Ern382.PartyId => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        isDpid: object.$.IsDPID ? !!object.$.IsDPID : undefined,
        isIsni: object.$.IsISNI ? !!object.$.IsISNI : undefined,
      }
    : undefined,
  value: object._ || object,
});
