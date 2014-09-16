var BlinkyDancer = function(top, left, timeBetweenSteps){
  this.oldStep = Dancer.prototype.step;

  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="dancer blinkydancer"></span>');
  this.setPosition(top, left);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  this.oldStep();

  this.$node.toggle();
};
