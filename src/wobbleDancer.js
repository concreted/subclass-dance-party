var WobbleDancer = function(top, left, timeBetweenSteps){
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps);

  var currentID = Math.floor(Math.random() * 1000);

  this.$node = $('<span class="dancer dancer-small wobbledancer" id="'+ currentID +'"></span>');

  this.setPosition(top, left);

  var size = Math.floor((Math.random() * 50)) + 10;
  this.$node.css({height: size, width: size});
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

  this.$node.animate({top: newTop, left: newLeft}, 5000);
};

WobbleDancer.prototype.getBigger = function(prey){
  prey = prey || 10;
  var size = this.$node.css('height') + prey;
  this.$node.css({height: size, width: size});
};

