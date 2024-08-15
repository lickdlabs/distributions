import { Contributor } from "./contributor";

// <xs:complexType name="Character">
//   <xs:sequence>
//     <xs:element name="CharacterPartyReference">
//       <xs:simpleType>
//         <xs:restriction base="xs:IDREF">
//           <xs:pattern value="P[\d\-_a-zA-Z]+" />
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:element>
//     <xs:element name="Performer" minOccurs="0" type="ern:Contributor" />
//   </xs:sequence>
//   <xs:attribute name="SequenceNumber" type="xs:integer" />
// </xs:complexType>
export type Character = {
  _attributes?: {
    sequenceNumber?: number;
  };

  characterPartyReference: `${string & { __brand: "P[\\d\\-_a-zA-Z]+" }}`;
  performer?: Contributor;
};
