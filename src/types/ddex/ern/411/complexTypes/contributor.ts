import { ContributorRole } from "./contributorRole";
import { DisplayCredits } from "./displayCredits";
import { InstrumentType } from "./instrumentType";
import { IsCredited } from "./isCredited";

// <xs:complexType name="Contributor">
//   <xs:sequence>
//     <xs:element name="ContributorPartyReference">
//       <xs:simpleType>
//         <xs:restriction base="xs:IDREF">
//           <xs:pattern value="P[\d\-_a-zA-Z]+" />
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:element>
//     <xs:element name="Role" minOccurs="0" maxOccurs="unbounded" type="ern:ContributorRole" />
//     <xs:element name="InstrumentType" minOccurs="0" maxOccurs="unbounded" type="ern:InstrumentType" />
//     <xs:element name="HasMadeFeaturedContribution" minOccurs="0" type="xs:boolean" />
//     <xs:element name="HasMadeContractedContribution" minOccurs="0" type="xs:boolean" />
//     <xs:element name="IsCredited" minOccurs="0" type="ern:IsCredited" />
//     <xs:element name="DisplayCredits" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayCredits" />
//   </xs:sequence>
//   <xs:attribute name="SequenceNumber" type="xs:integer" />
// </xs:complexType>
export type Contributor = {
  _attributes?: {
    sequenceNumber?: number;
  };

  contributorPartyReference: `${string & { __brand: "P[\\d\\-_a-zA-Z]+" }}`;
  role?: ContributorRole[];
  instrumentType?: InstrumentType[];
  hasMadeFeaturedContribution?: boolean;
  hasMadeContractedContribution?: boolean;
  isCredited?: IsCredited;
  displayCredits?: DisplayCredits[];
};
