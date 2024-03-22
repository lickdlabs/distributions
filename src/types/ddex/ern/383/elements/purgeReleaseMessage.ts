import { MessageHeader } from "../complexTypes";

// <xs:element name="PurgeReleaseMessage">
//   <xs:complexType>
//     <xs:sequence>
//       <xs:element name="MessageHeader" type="ern:MessageHeader" />
//       <xs:element name="PurgedRelease" type="ern:PurgedRelease" />
//     </xs:sequence>
//     <xs:attribute name="MessageSchemaVersionId" type="xs:string" use="required" />
//     <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
//   </xs:complexType>
// </xs:element>
export type PurgeReleaseMessage = {
  _attributes: {
    messageSchemaVersionId: string;
    languageAndScriptCode?: string;
  };

  messageHeader: MessageHeader;
  // @todo <xs:element name="PurgedRelease" type="ern:PurgedRelease" />
};
