
export let ConsoleAppender = class ConsoleAppender {
  debug(logger, ...rest) {
    console.debug(`DEBUG [${logger.id}]`, ...rest);
  }

  info(logger, ...rest) {
    console.info(`INFO [${logger.id}]`, ...rest);
  }

  warn(logger, ...rest) {
    console.warn(`WARN [${logger.id}]`, ...rest);
  }

  error(logger, ...rest) {
    console.error(`ERROR [${logger.id}]`, ...rest);
  }
};