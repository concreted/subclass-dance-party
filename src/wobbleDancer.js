var WobbleDancer = function(top, left, timeBetweenSteps){
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer wobbledancer"></span>');
  this.where = 'right';
  this.size = 'small';
  this.setPosition(top, left);
};

WobbleDancer.prototype = Object.create(Dancer.prototype);
WobbleDancer.prototype.constructor = WobbleDancer;

WobbleDancer.prototype.step = function(){
  this.oldStep();

  if (this.size === 'small'){
    if (parseInt(this.$node.css('borderWidth')) > 5*this.stepSize){
      this.size = 'big';
    } else {
      this.getBigger();
    }
  } else {
    if (parseInt(this.$node.css('borderWidth')) < this.stepSize/5){
      this.size = 'small';
    } else {
      this.getSmaller();
    }
  }

};

WobbleDancer.prototype.getBigger = function(){
  var size = parseInt(this.$node.css('borderWidth')) + this.stepSize;
  //this.$node.css('borderWidth', size);

};

WobbleDancer.prototype.getSmaller = function(){
  var size = parseInt(this.$node.css('borderWidth')) - this.stepSize;
  //this.$node.css('borderWidth', size);

};

