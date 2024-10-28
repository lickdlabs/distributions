export type CollectionReference = `${string & {
  __brand: "X[\\d\\-_a-zA-Z]+";
}}`;

export type DpidReference = `${string & {
  __brand: "PADPIDA[a-zA-Z0-9]+";
}}`;

export type PartyReference = `${string & {
  __brand: "P[\\d\\-_a-zA-Z]+";
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
