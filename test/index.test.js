var toDatetime = require('../index.js'),
    assert     = require('chai').assert;

describe('toDatetime()', function() {
  it('Should work with strings', function() {
    assert.strictEqual(toDatetime('2016-03-20 15:51:55'), '2016-03-20 15:51:55');
  });

  it('Should work with strings as UTC', function() {
    var dateString = '2016-03-20 15:51:55';
    var date       = new Date(dateString);

    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

    assert.strictEqual(toDatetime(dateString, true), toDatetime(date));
  });

  it('Should work with instances', function() {
    assert.strictEqual(toDatetime(new Date('2016-03-20 15:51:55')), '2016-03-20 15:51:55');
  });

  it('Should work with instances as UTC', function() {
    var dateString = '2016-03-20 15:51:55';
    var date       = new Date(dateString);

    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

    assert.strictEqual(toDatetime(new Date(dateString), true), toDatetime(date));
  });

  it('Should work with no value (now)', function() {
    assert.strictEqual(toDatetime(), toDatetime(new Date()));
  });

  it('Should work with no value (now) as UTC', function() {
    var date = new Date();

    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

    assert.strictEqual(toDatetime(date), toDatetime(null, true));
  });
});
