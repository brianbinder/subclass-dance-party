var MouseOverDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('mouseOver');
  this._positionInDancers = window.dancers.length;
  this.$node.attr('id', this._positionInDancers);
};

MouseOverDancer.prototype = Object.create(MakeDancer.prototype);
MouseOverDancer.prototype.constructor = MouseOverDancer;
MouseOverDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // var blinkyDancer = new MakeDancer(top, left, timeBetweenSteps);
  // When the mouse hovers over, what do we want?
  //

  MakeDancer.prototype.step.call(this);

};

MouseOverDancer.prototype.lineUp = function() {
  this.$node.css('left', '95%');
};

MouseOverDancer.prototype.change = function() {
  this.$node.css({
    top: '+=10',
    right: '+=10',
    bottom: '+=10',
    left: '+=10'
  });
};