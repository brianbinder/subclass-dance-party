var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  // var blinkyDancer = new MakeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.oldStep = blinkyDancer.step;
  // var oldStep = blinkyDancer.step;
  // this.timeBetweenSteps = timeBetweenSteps;

};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;
MakeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // var blinkyDancer = new MakeDancer(top, left, timeBetweenSteps);

  MakeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

MakeBlinkyDancer.prototype.lineUp = function() {
  this.$node.css('left', '5%');
};

// var dancePerson = MakeBlinkyDancer(43, 324, 1000);

// dancePerson = {
//   node = jquery
//   timeBetweenSteps = 1000

// }