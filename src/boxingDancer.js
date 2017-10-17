var BoxingDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

  var color1 = Math.floor(Math.random() * 255);
  var color2 = Math.floor(Math.random() * 255);
  var color3 = Math.floor(Math.random() * 255);
  this.$node.css('border-color', 'rgb(' + color1 + ',' + color2 + ',' + color3 + ')');
  this.$node.addClass('square');
  this.rotate = 0;
};

BoxingDancer.prototype = Object.create(MakeDancer.prototype);
BoxingDancer.prototype.constructor = BoxingDancer;
BoxingDancer.prototype.step = function() {

  MakeDancer.prototype.step.call(this);


  var dancer = this;
  dancer.rotate += 60;
  this.$node.css({
    transform: 'rotate(' + dancer.rotate + 'deg)'
  });

};

BoxingDancer.prototype.lineUp = function() {
  this.$node.css('top', '95%');
};

