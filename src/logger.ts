import { ILogger } from "@lickd/logger";

export class Logger {
  private static logger: ILogger;

  public static setLogger(logger: ILogger): void {
    Logger.logger = logger;
  }

  public static debug(message?: any, ...optionalParams: any[]): void {
    if (Logger.logger) {
      Logger.logger.debug(message, ...optionalParams);
    }
  }

  public static error(message?: any, ...optionalParams: any[]): void {
    if (Logger.logger) {
      Logger.logger.error(message, ...optionalParams);
    }
  }

  public static info(message?: any, ...optionalParams: any[]): void {
    if (Logger.logger) {
      Logger.logger.info(message, ...optionalParams);
    }
  }

  public static log(message?: any, ...optionalParams: any[]): void {
    if (Logger.logger) {
      Logger.logger.log(message, ...optionalParams);
    }
  }

  public static trace(message?: any, ...optionalParams: any[]): void {
    if (Logger.logger) {
      Logger.logger.trace(message, ...optionalParams);
    }
  }

  public static warn(message?: any, ...optionalParams: any[]): void {
    if (Logger.logger) {
      Logger.logger.warn(message, ...optionalParams);
    }
  }
}
