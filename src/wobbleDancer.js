var WobbleDancer = function(top, left, timeBetweenSteps){
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps);

  var currentID = Math.floor(Math.random() * 1000);

  this.$node = $('<span class="dancer follower orbit wobbledancer" id="'+ currentID +'"></span>');

  this.setPosition(top, left);

  var size = Math.floor((Math.random() * 50)) + 10;
  this.$node.css({height: size, width: size});
};

WobbleDancer.prototype = Object.create(Dancer.prototype);
WobbleDancer.prototype.constructor = WobbleDancer;

WobbleDancer.prototype.step = function(){
  this.oldStep();

  //this.randomMove();
  //this.getSmaller();
};

WobbleDancer.prototype.randomMove = function() {
  var newTop;
  var newLeft;
  if (window.leader !== null) {
    console.log('following leader');
    newTop = parseInt(window.leader.css('top'));
    newLeft = parseInt(window.leader.css('left'));
    // newTop = 0;
    // newLeft = 0;
  }
  else {
    newTop = Math.random() * $(window).height();
    newLeft = Math.random() * $(window).width();
  }

  this.$node.animate({top: newTop, left: newLeft}, 2000);
};

WobbleDancer.prototype.getSmaller = function(prey){
  prey = prey || 0.5;
  var size = parseInt(this.$node.css('height')) - prey;
  this.$node.css({height: size, width: size});
};

