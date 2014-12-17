import {ConsoleAppender} from '../src/index';

describe('console appender', () => {
  it('should have some tests', () => {
    var appender = new ConsoleAppender();
    expect(appender).not.toBe(null);
  });
});