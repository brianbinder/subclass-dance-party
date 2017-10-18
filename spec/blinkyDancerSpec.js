describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new MakeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('colorfulDancer', function() {
  var cDancer, currentColor, newColor;
  beforeEach(function() {
    cDancer = new MakeColorfulDancer(50, 50, 1000);
    currentColor = cDancer.$node.css('border-color');
    cDancer.step();
    newColor = cDancer.$node.css('border-color');
  });


  it('should change colors from red to something else', function() {
    expect(currentColor).to.not.equal(newColor);
  });

});


describe('boxingDancer', function() {
  var bDancer, originalAngle, finalAngle;
  beforeEach(function() {
    bDancer = new BoxingDancer(50, 50, 500);
    originalAngle = bDancer.rotate;
    bDancer.step();
    finalAngle = bDancer.rotate;
  });

  it('should rotate after each step', function() {
    expect(originalAngle).to.not.equal(finalAngle);
  });
});
