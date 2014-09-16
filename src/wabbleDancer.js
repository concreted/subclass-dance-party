var WabbleDancer = function(top, left, timeBetweenSteps){
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer dancer-small wabbledancer"></span>');
  this.setPosition(top, left);

  var size = Math.floor((Math.random() * 50)) + 10;
  this.$node.css({height: size, width: size});
};

WabbleDancer.prototype = Object.create(Dancer.prototype);
WabbleDancer.prototype.constructor = WabbleDancer;

WabbleDancer.prototype.step = function(){
  this.oldStep();

  this.randomMove();
  //this.getBigger();
};

WabbleDancer.prototype.randomMove = function() {
  var newTop = Math.random() * $(window).height();
  var newLeft = Math.random() * $(window).width();

  this.$node.animate({top: newTop, left: newLeft}, 10000);
};

WabbleDancer.prototype.getBigger = function(prey){
  prey = prey || 10;
  var size = this.$node.css('height') + prey;
  this.$node.css({height: size, width: size});
};

