import { DetailedResourceContributor } from "./detailedResourceContributor";
import { PartyChoice } from "./partyChoice";

// <xs:complexType name="Character">
//   <xs:sequence>
//     <xs:choice>
//       <xs:element name="PartyId" maxOccurs="unbounded" type="ern:PartyId" />
//       <xs:sequence>
//         <xs:element name="PartyName" maxOccurs="unbounded" type="ern:PartyName" />
//         <xs:element name="PartyId" minOccurs="0" maxOccurs="unbounded" type="ern:PartyId" />
//       </xs:sequence>
//     </xs:choice>
//     <xs:element name="ResourceContributor" minOccurs="0" type="ern:DetailedResourceContributor" />
//   </xs:sequence>
//   <xs:attribute name="SequenceNumber" type="xs:integer" />
// </xs:complexType>
export type Character = PartyChoice & {
  _attributes?: {
    sequenceNumber?: number;
  };

  resourceContributor?: DetailedResourceContributor;
};
