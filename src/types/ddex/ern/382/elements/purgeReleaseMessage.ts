import { MessageHeader } from "../complexTypes";

export type PurgeReleaseMessage = {
  _attributes: {
    messageSchemaVersionId: string;
    languageAndScriptCode?: string;
  };

  messageHeader: MessageHeader;
  // <xs:element name="PurgedRelease" type="ern:PurgedRelease" />
};
