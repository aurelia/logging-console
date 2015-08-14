import {ConsoleAppender} from '../src/index';

describe('console appender', () => {
  it('can be instantiated', () => {
    var appender = new ConsoleAppender();
    expect(appender).not.toBe(null);
  });
});
