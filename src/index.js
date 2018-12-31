/*
 * An implementation of the Appender interface.
 */
export class ConsoleAppender {
  /**
  * Appends a debug log.
  *
  * @param logger The source logger.
  * @param rest The data to log.
  */
  debug(logger: { id: string }, ...rest : any[]): void {
    console.debug(`DEBUG [${logger.id}]`, ...rest);
  }

  /**
  * Appends an info log.
  *
  * @param logger The source logger.
  * @param rest The data to log.
  */
  info(logger: { id: string }, ...rest : any[]): void {
    console.info(`INFO [${logger.id}]`, ...rest);
  }

  /**
  * Appends a warning log.
  *
  * @param logger The source logger.
  * @param rest The data to log.
  */
  warn(logger: { id: string }, ...rest : any[]): void {
    console.warn(`WARN [${logger.id}]`, ...rest);
  }

  /**
  * Appends an error log.
  *
  * @param logger The source logger.
  * @param rest The data to log.
  */
  error(logger: { id: string }, ...rest : any[]): void {
    console.error(`ERROR [${logger.id}]`, ...rest);
  }
}
