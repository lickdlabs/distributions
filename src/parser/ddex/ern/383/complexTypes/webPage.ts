import { Ern383 } from "../../../../../types";
import { parseName } from "./name";
import { parsePartyId } from "./partyId";
import { parseReleaseId } from "./releaseId";

export const parseWebPage = (object: any): Ern383.WebPage => ({
  partyId: object.PartyId
    ? object.PartyId.map((partyId: any) => parsePartyId(partyId))
    : undefined,
  releaseId: object.ReleaseId
    ? object.ReleaseId.map((releaseId: any) => parseReleaseId(releaseId))
    : undefined,
  pageName: object.PageName ? parseName(object.PageName[0]) : undefined,
  url: object.URL ? object.URL[0] : undefined,
  userName: object.UserName ? object.UserName[0] : undefined,
  password: object.Password ? object.Password[0] : undefined,
});
