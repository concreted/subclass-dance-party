// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.stepSize = Math.random() * 20; //stepSize;
  this.setPosition(top, left);
  this.step();
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.getPosition = function() {

}

Dancer.prototype.stepRight = function() {

  var rStep = parseInt(this.$node.css('left')) + this.stepSize;
  this.$node.css('left',rStep);
};

Dancer.prototype.stepLeft = function() {
  var lStep = parseInt(this.$node.css('left')) - this.stepSize;

  this.$node.css('left',lStep);
};

Dancer.prototype.stepUp = function(speed) {
  speed = speed || 1;
  var uStep = parseInt(this.$node.css('top')) - this.stepSize * speed;

  this.$node.css('top', uStep);
};

Dancer.prototype.stepDown = function(speed) {
  speed = speed || 1;
  var dStep = parseInt(this.$node.css('top')) + this.stepSize * speed;

  this.$node.css('top', dStep);
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.lineUp = function() {
  if (parseInt(this.$node.css('top')) > 10) {
    this.stepUp(10);
  }
};

Dancer.prototype.changeColor = function() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  var colorstring = 'rgb(' + r + ',' + g + ',' + b + ')';
  this.$node.css('borderColor', colorstring);
};
