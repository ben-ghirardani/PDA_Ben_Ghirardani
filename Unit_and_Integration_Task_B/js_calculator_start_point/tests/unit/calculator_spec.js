var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can perform addition', function(){
    calculator.peviousTotal = 2;
    calculator.add(2);
    assert.equal( 4, calculator.runningTotal = 4 );
  })

  it('can perform subtraction', function(){
    calculator.previousTotal = 2;
    calculator.subtract(2);
    assert.equal( 0, calculator.runningTotal = 0 );
  })

  it('can perform multiplication', function(){
    calculator.peviousTotal = 2;
    calculator.multiply(5);
    assert.equal( 10, calculator.runningTotal = 10 );
  })

  it('can perform division', function(){
    calculator.peviousTotal = 21;
    calculator.divide(3);
    assert.equal( 7, calculator.runningTotal = 7 );
  })

  it('can reset newTotal to false on numberClick', function(){
    calculator.numberClick(2);
    assert.equal( false, calculator.newTotal );
  })

  it('can concatenate on NumberClick', function(){
    calculator.numberClick(2);
    calculator.numberClick(2);
    assert.equal( 22, calculator.runningTotal = 22 );
  })

  it('can change newTotal to true on operatorClick(+)', function(){
    calculator.newTotal = false;
    calculator.operatorClick('+');
    assert.equal( true, calculator.newTotal );
  })

  it('can change newTotal to true on operatorClick(-)', function(){
    calculator.newTotal = false;
    calculator.operatorClick('-');
    assert.equal( true, calculator.newTotal );
  })

  it('can change newTotal to true on operatorClick(*)', function(){
    calculator.newTotal = false;
    calculator.operatorClick('*');
    assert.equal( true, calculator.newTotal );
  })

  it('can change newTotal to true on operatorClick(/)', function(){
    calculator.newTotal = false;
    calculator.operatorClick('/');
    assert.equal( true, calculator.newTotal );
  })

  it('can change newTotal to true on operatorClick(=)', function(){
    calculator.newTotal = false;
    calculator.operatorClick('=');
    assert.equal( true, calculator.newTotal );
  })

  it('can update previousOperator to +', function(){
    calculator.operatorClick('+');
    assert.equal( '+', calculator.previousOperator );
  })

  it('can update previousOperator to -', function(){
    calculator.operatorClick('-');
    assert.equal( '-', calculator.previousOperator );
  })

  it('can update previousOperator to *', function(){
    calculator.operatorClick('*');
    assert.equal( '*', calculator.previousOperator );
  })

  it('can update previousOperator to /', function(){
    calculator.operatorClick('/');
    assert.equal( '/', calculator.previousOperator );
  })

  it('can clear selected previousOperator and previousTotal on clearClick if runningTotal is 0', function(){
    calculator.previousOperator = '+';
    calculator.previousTotal = 2;
    calculator.runningTotal = 0;
    calculator.clearClick();
    assert.equal( null, calculator.previousOperator );
    assert.equal( null, calculator.previousTotal );
  })

});
