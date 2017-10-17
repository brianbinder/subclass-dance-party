var SizeChanger = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<div class="dancer"><span class="dancer sizeChanger"></span></div>');
  this.setPosition(top, left);

  var color1 = Math.floor(Math.random() * 255);
  var color2 = Math.floor(Math.random() * 255);
  var color3 = Math.floor(Math.random() * 255);
  this.$node.css('background-color', 'rgb(' + color1 + ',' + color2 + ',' + color3 + ')');
  this.rotate = 0;

  this.size = Math.floor(Math.random() * 10);
};

SizeChanger.prototype = Object.create(MakeDancer.prototype);
SizeChanger.prototype.constructor = SizeChanger;
SizeChanger.prototype.step = function() {

  MakeDancer.prototype.step.call(this);

  var random = Math.floor(Math.random() * 100);
  var dancer = this;
  dancer.$node.animate({
    height: random,
    width: random
  }, dancer.timeBetweenSteps / 2, function() {
    dancer.$node.animate({
      height: dancer.size,
      width: dancer.size
    }, dancer.timeBetweenSteps / 2);
  });


};

SizeChanger.prototype.lineUp = function() {
  this.$node.css({
    top: '5%',
    left: '5%'
  });
};

