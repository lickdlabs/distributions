export class ParserError extends Error {
  public version?: number;
  public action?: string;

  constructor(data?: Partial<ParserError & Error>) {
    super();

    Object.assign(this, data);
  }
}
