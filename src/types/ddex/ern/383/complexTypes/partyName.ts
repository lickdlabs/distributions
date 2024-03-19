import { Name } from "./name";

export type PartyName = {
  _attributes: {
    languageAndScriptCode?: string;
  };

  fullName: Name;
  fullNameAsciiTranscribed?: string;
  fullNameIndexed?: Name;
  namesBeforeKeyName?: Name;
  keyName?: Name;
  namesAfterKeyName?: Name;
  abbreviatedName?: Name;
};
