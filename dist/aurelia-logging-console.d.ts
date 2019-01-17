
/*
 * An implementation of the Appender interface.
 */
export declare class ConsoleAppender {
  
  /**
    * Appends a debug log.
    *
    * @param logger The source logger.
    * @param rest The data to log.
    */
  debug(logger: { id: string }, ...rest: any[]): void;
  
  /**
    * Appends an info log.
    *
    * @param logger The source logger.
    * @param rest The data to log.
    */
  info(logger: { id: string }, ...rest: any[]): void;
  
  /**
    * Appends a warning log.
    *
    * @param logger The source logger.
    * @param rest The data to log.
    */
  warn(logger: { id: string }, ...rest: any[]): void;
  
  /**
    * Appends an error log.
    *
    * @param logger The source logger.
    * @param rest The data to log.
    */
  error(logger: { id: string }, ...rest: any[]): void;
}