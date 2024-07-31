import { Avs411 } from "../../../avs";
import { CurrentTerritoryCode } from "./currentTerritoryCode";
import { SimpleRightsType } from "./simpleRightsType";
import { ValidityPeriod } from "./validityPeriod";

// <xs:complexType name="Affiliation">
//   <xs:sequence>
//     <xs:choice>
//       <xs:element name="CompanyName" type="xs:string" />
//       <xs:element name="PartyAffiliateReference">
//         <xs:simpleType>
//           <xs:restriction base="xs:IDREF">
//             <xs:pattern value="P[\d\-_a-zA-Z]+" />
//           </xs:restriction>
//         </xs:simpleType>
//       </xs:element>
//     </xs:choice>
//     <xs:element name="Type" type="avs:AffiliationType" />
//     <xs:choice>
//       <xs:element name="TerritoryCode" maxOccurs="unbounded" type="ern:CurrentTerritoryCode" />
//       <xs:element name="ExcludedTerritoryCode" maxOccurs="unbounded" type="ern:CurrentTerritoryCode" />
//     </xs:choice>
//     <xs:element name="ValidityPeriod" minOccurs="0" type="ern:ValidityPeriod" />
//     <xs:element name="RightsType" minOccurs="0" maxOccurs="unbounded" type="ern:SimpleRightsType" />
//     <xs:element name="PercentageOfRightsAssignment" minOccurs="0" type="xs:decimal" />
//   </xs:sequence>
// </xs:complexType>
export type Affiliation = AffiliationIdentifierChoice &
  TerritoryChoice & {
    type: Avs411.AffiliationType;
    validityPeriod?: ValidityPeriod;
    rightsType?: SimpleRightsType[];
    percentageOfRightsAssignment?: number;
  };

// <xs:choice>
//   <xs:element name="CompanyName" type="xs:string" />
//   <xs:element name="PartyAffiliateReference">
//     <xs:simpleType>
//       <xs:restriction base="xs:IDREF">
//         <xs:pattern value="P[\d\-_a-zA-Z]+" />
//       </xs:restriction>
//     </xs:simpleType>
//   </xs:element>
// </xs:choice>
type AffiliationIdentifierChoice =
  | { companyName: string; partyAffiliateReference?: never }
  | {
      companyName?: never;
      partyAffiliateReference: `${string & { __brand: "P[\\d\\-_a-zA-Z]+" }}`;
    };

// <xs:choice>
//   <xs:element name="TerritoryCode" maxOccurs="unbounded" type="ern:CurrentTerritoryCode" />
//   <xs:element name="ExcludedTerritoryCode" maxOccurs="unbounded" type="ern:CurrentTerritoryCode" />
// </xs:choice>
type TerritoryChoice =
  | { TerritoryCode: CurrentTerritoryCode; ExcludedTerritoryCode?: never }
  | { TerritoryCode?: never; ExcludedTerritoryCode: CurrentTerritoryCode };
