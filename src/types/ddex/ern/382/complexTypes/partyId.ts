// <xs:complexType name="PartyId">
export type PartyId = {
  _attributes: {
    // <xs:attribute name="Namespace" type="xs:string" />
    namespace?: string;

    // <xs:attribute name="IsDPID" type="xs:boolean" />
    isDpid?: boolean;

    // <xs:attribute name="IsISNI" type="xs:boolean" />
    isIsni?: boolean;
  };

  // <xs:extension base="xs:string">
  value: string;
};
