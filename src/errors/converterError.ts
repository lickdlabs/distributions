export class ConverterError extends Error {
  version?: number;
  action?: string;

  constructor(data?: Partial<ConverterError & Error>) {
    super();

    Object.assign(this, data);
  }
}
