var move = function(time) {
  $dancers = $('.follower');
  $leader = $('.leader');

  $($dancers).stop();

  $dancers.each(function(idx, n) {
    var newTop = Math.random() * $(window).height();
    var newLeft = Math.random() * $(window).width();

    if ($leader.length !== 0) {
      //debugger;
      var leaderTop = parseInt($leader.css('top'));
      var leaderLeft = parseInt($leader.css('left'));
      var leaderSize = parseInt($leader.css('height'));

      newTop = Math.floor(Math.random() * (leaderSize*2)) + leaderTop;
      newLeft = Math.floor(Math.random() * (leaderSize*2)) + leaderLeft;
    }
    //debugger;
    $(n).animate({top: newTop, left: newLeft}, time);
  });
}

$(document).bind('mousemove', function(e){
    $('.leader').css({
       left:  e.pageX + 20,
       top:   e.pageY
    });
    //move(2000);
});

$(document).ready(function(){
  window.dancers = [];
  window.leader = null;
  $('.addDancerButton').on('click', function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('body').on('mouseover', '.dancer', function() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var colorstring = 'rgb(' + r + ',' + g + ',' + b + ')';
    $(this).css('borderColor', colorstring);
  });

  $('body').on('click', '.dancer', function() {
    $(this).stop();
    var currentLeader = $('.leader');
    $(currentLeader).toggleClass('leader');
    $(currentLeader).toggleClass('follower');
    $(currentLeader).toggleClass('orbit');

    var newSize = parseInt($(this).css('height')) * 1.5;
    $(this).css('height', newSize);
    $(this).css('width', newSize);
    $(this).toggleClass('follower');
    $(this).toggleClass('leader');
    $(this).toggleClass('orbit');
    window.leader = $(this);

    move(1500);
  });

  setInterval(function() {
    move(5000);
  }, 5000);

  // setInterval(function() {
  //   var eat = function(obj1, obj2) {

  //     var o1 = '#' + obj1.$node.attr('id');
  //     var o2 = '#' + obj2.$node.attr('id');
  //     var collider1 = $($(o1).collision(o2)[0]);
  //     //console.log('o1', o1)
  //     var collider2 = $($(o2).collision(o1)[0]);
  //     if (collider2.length > 0) {
  //       var predator;
  //       var prey;
  //       //debugger;
  //       if (parseInt(collider1.css('height')) > parseInt(collider2.css('height'))) {

  //         predator = collider1;
  //         prey = collider2;
  //       } else {
  //         prey = collider1;
  //         predator = collider2;
  //       }

  //       prey.remove();
  //       var preysize = parseInt(prey.css('height'));
  //       var size = parseInt(predator.css('height')) + preysize;
  //       predator.css({height: size, width: size});

  //       var r = Math.floor(Math.random() * 255);
  //       var g = Math.floor(Math.random() * 255);
  //       var b = Math.floor(Math.random() * 255);
  //       var colorstring = 'rgb(' + r + ',' + g + ',' + b + ')';
  //       predator.css('borderColor', colorstring);

  //       return prey.attr('id');
  //     }
  //     return false;
  //   };

  //   var toRemove = [];

  //   for (var i = 0; i < window.dancers.length; i++) {
  //     for(var j = 0; j < window.dancers.length; j++) {
  //       if (window.dancers[i].$node.attr('id') !== window.dancers[j].$node.attr('id')) {
  //         var eaten = eat(window.dancers[i], window.dancers[j]);
  //         if (eaten !== false) {
  //           toRemove.push(eaten);
  //         }
  //       }
  //     }
  //   }

  //   for (var k = 0; k < toRemove.length; k++) {

  //     var targetIDX = window.dancers.map(function(n) {return n.$node.attr('id')}).indexOf(toRemove[k]);
  //     window.dancers.splice(targetIDX, 1);
  //   };

  // }, 50);

});

