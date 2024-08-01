import { Ern383 } from "../../../../../types";

export const parsePartyId = (object: any): Ern383.PartyId => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        isDpid: object.$.IsDPID ? !!object.$.IsDPID : undefined,
        isIsni: object.$.IsISNI ? !!object.$.IsISNI : undefined,
      }
    : undefined,
  value: object._ || object,
});
