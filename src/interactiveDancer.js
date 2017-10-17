var InteractiveDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('interactive');
  this.dancerCounter = 0;
};

InteractiveDancer.prototype = Object.create(MakeDancer.prototype);
InteractiveDancer.prototype.constructor = InteractiveDancer;
InteractiveDancer.prototype.step = function() {
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

  // go to the position where the dancerCounter index
  // debugger;
  if (window.nonInteractiveDancers[this.dancerCounter]) {
    if (this.timeBetweenSteps < 400) {
      this.timeBetweenSteps += 400;
    }
    var currentDancerTop = window.nonInteractiveDancers[this.dancerCounter].$node.css('top');
    var currentDancerleft = window.nonInteractiveDancers[this.dancerCounter].$node.css('left');
    this.$node.css({
      top: currentDancerTop,
      left: currentDancerleft
    });
    this.dancerCounter++;
    if (this.dancerCounter >= window.nonInteractiveDancers.length) {
      this.dancerCounter = 0;
    }
  }
  // if the dancerCounter === length of the array then set
  // dancer counter to zero
};
InteractiveDancer.prototype.lineUp = function() {
  this.$node.css('left', '95%');
};