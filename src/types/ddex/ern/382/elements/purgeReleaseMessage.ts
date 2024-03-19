import { MessageHeader } from "../complexTypes";

// <xs:element name="PurgeReleaseMessage">
export type PurgeReleaseMessage = {
  _attributes: {
    // <xs:attribute name="MessageSchemaVersionId" type="xs:string" use="required" />
    messageSchemaVersionId: string;

    // <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
    languageAndScriptCode?: string;
  };

  // <xs:element name="MessageHeader" type="ern:MessageHeader" />
  messageHeader: MessageHeader;

  // @todo <xs:element name="PurgedRelease" type="ern:PurgedRelease" />
};
