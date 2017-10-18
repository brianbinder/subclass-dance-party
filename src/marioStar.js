var MarioStar = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('marioStar');
};

MarioStar.prototype = Object.create(MakeDancer.prototype);
MarioStar.prototype.constructor = MarioStar;
MarioStar.prototype.step = function() {

  MakeDancer.prototype.step.call(this);


};

MarioStar.prototype.lineUp = function() {
  this.$node.css('left', '95%');
};
