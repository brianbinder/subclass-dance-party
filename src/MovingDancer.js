var MovingDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

  var color1 = Math.floor(Math.random() * 255);
  var color2 = Math.floor(Math.random() * 255);
  var color3 = Math.floor(Math.random() * 255);
  this.$node.css('border-color', 'rgb(' + color1 + ',' + color2 + ',' + color3 + ')');
  this.$node.addClass('movingDancer');

  this.left = (Math.random() * 50) + '%';
  this.right = ((Math.random() * 50) + 50) + '%';
};

MovingDancer.prototype = Object.create(MakeDancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;
MovingDancer.prototype.step = function() {

  MakeDancer.prototype.step.call(this);

  var dancer = this;
  dancer.$node.animate({
    left: dancer.left
  }, this.timeBetweenSteps / 2, function() {
    dancer.$node.animate({
      left: dancer.right
    });
  });

};

MovingDancer.prototype.lineUp = function() {
  this.$node.css('top', '5%');
};
