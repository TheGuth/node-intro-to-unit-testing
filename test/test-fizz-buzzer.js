const fizzBuzzer = require('../fizzBuzzer');

require('chai').should();

describe.only('fizzBuzzer', function() {
  it('if given 5 should return buzz', function() {
      fizzBuzzer(5).should.equal('buzz');
  });

  it('if given 3 should return fizz', function() {
      fizzBuzzer(3).should.equal('fizz');
  });

  it('if given 15 should return fizzbuzz', function() {
    fizzBuzzer(15).should.equal('fizz-buzz');
  });

  it('if given 8 should return 8', function() {
    fizzBuzzer(8).should.equal(8);
  });
});
