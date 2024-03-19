import { MessageHeader } from "../complexTypes";

// <xs:element name="PurgeReleaseMessage">
//   <xs:complexType>
//     <xs:sequence>
//       <xs:element name="MessageHeader" type="ern:MessageHeader" />
//       <xs:element name="PurgedRelease" type="ern:PurgedRelease" />
//     </xs:sequence>
//     <xs:attribute name="LanguageAndScriptCode" type="xs:string" use="required" />
//   </xs:complexType>
// </xs:element>
export type PurgeReleaseMessage = {
  _attributes: {
    languageAndScriptCode: string;
  };

  messageHeader: MessageHeader;
  // <xs:element name="PurgedRelease" type="ern:PurgedRelease" />
};
