var ShuffleDancer = function(top, left, timeBetweenSteps){
  this.oldStep = Dancer.prototype.step;

  Dancer.call(this, top, left, timeBetweenSteps);
  this.where = 'right';
  this.$node = $('<span class="dancer shuffledancer"></span>');
  this.setPosition(top, left);

};

ShuffleDancer.prototype = Object.create(Dancer.prototype);
ShuffleDancer.prototype.constructor = ShuffleDancer;

ShuffleDancer.prototype.step = function(){
  this.oldStep();
  // Spaz dancer
  //this.timeBetweenSteps *= 2;
  //setInterval(this.stepRight.bind(this), this.timeBetweenSteps);
  //setTimeout(setInterval(this.stepLeft.bind(this), this.timeBetweenSteps), this.timeBetweenSteps/2);
  if (this.where === 'right') {
    this.stepLeft();
    this.where = 'left';
  } else {
    this.stepRight();
    this.where = 'right';
  }
};
