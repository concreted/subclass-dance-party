$(document).ready(function(){
  window.dancers = [];

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
    $(this).toggleClass('dancer-grow');
    $(this).toggleClass('dancer-small');
  });

  $('body').on('click', '.dancer', function() {
    var newSize = parseInt($(this).css('height')) * 1.5;
    $(this).css('height', newSize);
    $(this).css('width', newSize);
  });

  setInterval(function() {
    var eat = function(obj1, obj2) {

      var o1 = '#' + obj1.$node.attr('id');
      var o2 = '#' + obj2.$node.attr('id');
      var collider1 = $($(o1).collision(o2)[0]);
      //console.log('o1', o1)
      var collider2 = $($(o2).collision(o1)[0]);
      if (collider2.length > 0) {
        var predator;
        var prey;
        //debugger;
        if (parseInt(collider1.css('height')) > parseInt(collider2.css('height'))) {

          predator = collider1;
          prey = collider2;
        } else {
          prey = collider1;
          predator = collider2;
        }

        prey.remove();
        // predator.remove();
        var preysize = parseInt(prey.css('height'));
        var size = parseInt(predator.css('height')) + preysize;
        //debugger;
        predator.css({height: size, width: size});

        return prey.attr('id');
      }
      return false;
    };

    var toRemove = [];

    for (var i = 0; i < window.dancers.length; i++) {
      for(var j = 0; j < window.dancers.length; j++) {
        if (window.dancers[i].$node.attr('id') !== window.dancers[j].$node.attr('id')) {
          var eaten = eat(window.dancers[i], window.dancers[j]);
          if (eaten !== false) {
            toRemove.push(eaten);
          }
        }
      }
    }

    for (var k = 0; k < toRemove.length; k++) {

      var targetIDX = window.dancers.map(function(n) {return n.$node.attr('id')}).indexOf(toRemove[k]);
      //debugger;
      window.dancers.splice(targetIDX, 1);
    };

  }, 50);

});

