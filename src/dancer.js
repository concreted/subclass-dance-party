// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer collider"></span>');
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
  var position = this.$node.css();
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};


Dancer.prototype.changeColor = function() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  var colorstring = 'rgb(' + r + ',' + g + ',' + b + ')';
  this.$node.css('borderColor', colorstring);
};
