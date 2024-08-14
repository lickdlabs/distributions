import { Avs411 } from "../../../avs";

// <xs:complexType name="DisplayCredits">
//   <xs:sequence>
//     <xs:element name="DisplayCreditText" type="xs:string" />
//     <xs:sequence minOccurs="0" maxOccurs="unbounded">
//       <xs:element name="DisplayCreditParty">
//         <xs:simpleType>
//           <xs:restriction base="xs:IDREF">
//             <xs:pattern value="P[\d\-_a-zA-Z]+" />
//           </xs:restriction>
//         </xs:simpleType>
//       </xs:element>
//       <xs:element name="NameUsedInDisplayCredit" minOccurs="0" type="xs:string" />
//     </xs:sequence>
//   </xs:sequence>
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
//   <xs:attribute name="ApplicableTerritoryCode" type="avs:CurrentTerritoryCode" />
//   <xs:attribute name="IsDefault" type="xs:boolean" />
// </xs:complexType>
export type DisplayCredits = {
  _attributes?: {
    languageAndScriptCode?: string;
    applicableTerritoryCode?: Avs411.CurrentTerritoryCode;
    isDefault?: boolean;
  };

  displayCreditText: string;
  displayCreditPartyList?: {
    displayCreditParty: `${string & { __brand: "P[\\d\\-_a-zA-Z]+" }}`;
    nameUsedInDisplayCredit?: string;
  }[];
};
