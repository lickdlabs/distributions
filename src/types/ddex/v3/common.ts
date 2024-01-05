export type TFile = {
  // <xs:element name="FileName" type="xs:string">
  fileName: string;
  // <xs:element name="FilePath" minOccurs="0" type="xs:string">
  filePath?: string;
  // <xs:element name="HashSum" minOccurs="0" type="ern:HashSum">
  hashSum?: {
    // <xs:element name="HashSum" type="xs:string">
    hashSum: string;
    // <xs:element name="HashSumAlgorithmType" type="ern:HashSumAlgorithmType">
    hashSumAlgorithmType: string;
  };
};
