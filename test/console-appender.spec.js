import {ConsoleAppender} from '../lib/index';

describe('console appender', () => {
  it('should have some tests', () => {
    var appender = new ConsoleAppender();
    expect(appender).not.toBe(null);
  });
});