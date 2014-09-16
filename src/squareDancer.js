var SquareDancer = function(top, left, timeBetweenSteps){
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer squaredancer"></span>');
  this.where = 'right';
  this.setPosition(top, left);
};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;

SquareDancer.prototype.step = function(){
  this.oldStep();
  if (this.where === 'right') {
    this.stepDown();
    this.where = 'down';
  } else if (this.where === 'down') {
    this.stepLeft();
    this.where = 'left';
  } else if (this.where === 'left') {
    this.stepUp();
    this.where = 'up';
  } else {
    this.stepRight();
    this.where = 'right';
  }
};
