export type CollectionReference = `${string & {
  __brand: "X[\\d\\-_a-zA-Z]+";
}}`;

export type MusicalWorkReference = `${string & {
  __brand: "W[\\d\\-_a-zA-Z]+";
}}`;

export type ReleaseReference = `${string & {
  __brand: "R[\\d\\-_a-zA-Z]+";
}}`;

export type ResourceReference = `${string & {
  __brand: "A[\\d\\-_a-zA-Z]+";
}}`;

export type TechnicalResourceDetailsReference = `${string & {
  __brand: "T[\\d\\-_a-zA-Z]+";
}}`;
