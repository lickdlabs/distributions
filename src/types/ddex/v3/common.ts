export type TFile = {
  fileName: string;
  filePath?: string;
  hashSum: {
    hashSum: string;
    hashSumAlgorithmType: string;
  };
};
