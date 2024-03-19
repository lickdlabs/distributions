import { MessageHeader } from "../complexTypes";

export type PurgeReleaseMessage = {
  _attributes: {
    languageAndScriptCode: string;
  };

  messageHeader: MessageHeader;
  // <xs:element name="PurgedRelease" type="ern:PurgedRelease" />
};
