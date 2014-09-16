var WobbleDancer = function(top, left, timeBetweenSteps){
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer dancer-small wobbledancer"></span>');
  //this.$node.draggable();
  this.where = 'right';
  this.size = 'small';
  this.setPosition(top, left);
};

WobbleDancer.prototype = Object.create(Dancer.prototype);
WobbleDancer.prototype.constructor = WobbleDancer;

WobbleDancer.prototype.step = function(){
  this.oldStep();

  this.randomMove();
  //this.getBigger();


};

WobbleDancer.prototype.randomMove = function() {
  var newTop = Math.random() * $(window).height();
  var newLeft = Math.random() * $(window).width();

  this.$node.animate({top: newTop, left: newLeft}, 10000);
};

WobbleDancer.prototype.getBigger = function(){
  this.$node.toggleClass('dancer-small');
  this.$node.toggleClass('dancer-grow');
};

WobbleDancer.prototype.getSmaller = function(){
  var size = parseInt(this.$node.css('borderWidth')) - this.stepSize;
  //this.$node.css('borderWidth', size);

};

