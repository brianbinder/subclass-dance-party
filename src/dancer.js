// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this._positionInDancers = window.dancers.length;
  this.$node.attr('id', this._positionInDancers);

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

  this.setPosition(top, left);

};

MakeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

MakeDancer.prototype.change = function() {
  this.$node.css({
    top: '-=20',
    height: '+=40',
    left: '-=20',
    width: '+=40'
  });
};

MakeDancer.prototype.unChange = function() {
  this.$node.css({
    top: '+=20',
    height: '-=40',
    left: '+=20',
    width: '-=40'
  });
};