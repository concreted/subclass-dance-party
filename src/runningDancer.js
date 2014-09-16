var RunningDancer = function(top, left, timeBetweenSteps){
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer runningdancer"></span>');
  this.where = 'right';
  this.setPosition(top, left);
};

RunningDancer.prototype = Object.create(Dancer.prototype);
RunningDancer.prototype.constructor = RunningDancer;

RunningDancer.prototype.step = function(){
  this.oldStep();

  if (this.where === 'right') {
    this.stepRight();
    if (parseInt(this.$node.css('left')) >= $('.topbar').width()) {
      this.where = 'left';
    }
  } else {
    this.stepLeft();
    if (parseInt(this.$node.css('left')) <= 0) {
      this.where = 'right';
    }
  }
};
