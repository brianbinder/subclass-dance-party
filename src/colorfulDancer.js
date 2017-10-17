var MakeColorfulDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);


};

MakeColorfulDancer.prototype = Object.create(MakeDancer.prototype);
MakeColorfulDancer.prototype.constructor = MakeColorfulDancer;
MakeColorfulDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // var blinkyDancer = new MakeDancer(top, left, timeBetweenSteps);

  MakeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var color1 = Math.floor(Math.random() * 255);
  var color2 = Math.floor(Math.random() * 255);
  var color3 = Math.floor(Math.random() * 255);
  this.$node.css('border-color', 'rgb(' + color1 + ',' + color2 + ',' + color3 + ')');
};

MakeColorfulDancer.prototype.lineUp = function() {
  this.$node.css('left', '95%');
};