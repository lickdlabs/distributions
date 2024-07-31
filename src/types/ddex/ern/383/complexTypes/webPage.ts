import { Name } from "./name";
import { PartyId } from "./partyId";
import { ReleaseId } from "./releaseId";

// <xs:complexType name="WebPage">
//   <xs:sequence>
//     <xs:element name="PartyId" minOccurs="0" maxOccurs="unbounded" type="ern:PartyId" />
//     <xs:element name="ReleaseId" minOccurs="0" maxOccurs="unbounded" type="ern:ReleaseId" />
//     <xs:element name="PageName" minOccurs="0" type="ern:Name" />
//     <xs:element name="URL" minOccurs="0" type="xs:string" />
//     <xs:element name="UserName" minOccurs="0" type="xs:string" />
//     <xs:element name="Password" minOccurs="0" type="xs:string" />
//   </xs:sequence>
// </xs:complexType>
export type WebPage = {
  partyId?: PartyId[];
  releaseId?: ReleaseId[];
  pageName?: Name;
  url?: string;
  userName?: string;
  password?: string;
};
