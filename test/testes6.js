require('..')({
  target: 'ES6'
})

var chai = require('chai'),
    expect = chai.expect;

describe('typescript-require', function() {
  it('async function should be ok', function (done) {
    var ship = require('./assets/es6');
    ship.async_await()
      .then(done)
      .catch(done);
  })
})
