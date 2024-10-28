import { DpidReference } from "../references";
import { PartyNameWithoutCode } from "./partyNameWithoutCode";

// <xs:complexType name="MessagingPartyWithoutCode">
//   <xs:sequence>
//     <xs:element name="PartyId">
//       <xs:simpleType>
//         <xs:restriction base="xs:string">
//           <xs:pattern value="PADPIDA[a-zA-Z0-9]+" />
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:element>
//     <xs:element name="PartyName" minOccurs="0" type="ern:PartyNameWithoutCode" />
//     <xs:element name="TradingName" minOccurs="0" type="xs:string" />
//   </xs:sequence>
// </xs:complexType>
export type MessagingPartyWithoutCode = {
  partyId: DpidReference;
  partyName?: PartyNameWithoutCode;
  tradingName?: string;
};
