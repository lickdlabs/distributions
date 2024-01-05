export type TFile = {
  // <xs:element name="URI" type="xs:string">
  uri: string;
  // <xs:element name="HashSum" minOccurs="0" type="ern:DetailedHashSum">
  hashSum?: {
    // <xs:element name="Algorithm" type="ern:HashSumAlgorithmType">
    algorithm: string;
    // <xs:element name="HashSumValue" type="xs:string">
    hashSumValue: string;
  };
  // <xs:element name="FileSize" minOccurs="0" type="xs:decimal">
  fileSize?: number;
};
