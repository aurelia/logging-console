import {ConsoleAppender} from '../src/index';

describe('console appender', () => {
  let logger;
  let appender;

  beforeEach(() => {
    logger = {id:'test logger'};
    appender = new ConsoleAppender();
  });

  it('can debug', () => {
    appender.debug(logger, 'test debug message');
  });

  it('can warn', () => {
    appender.warn(logger, 'test warn message');
  });

  it('can info', () => {
    appender.info(logger, 'test info message');
  });

  it('can error', () => {
    appender.error(logger, 'test error message');
  });
});
