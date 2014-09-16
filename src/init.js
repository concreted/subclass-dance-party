$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $("body").append(dancer.$node);
  });

  $("body").on('mouseover', '.dancer', function() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var colorstring = 'rgb(' + r + ',' + g + ',' + b + ')';
    $(this).css('borderColor', colorstring);
    $(this).toggleClass('dancer-grow');
    $(this).toggleClass('dancer-small');
  });

  setInterval(function() {
    var eat = function(obj1, obj2) {

      o1 = "#" + obj1.$node.attr('id');
      o2 = "#" + obj2.$node.attr('id');
      var collider1 = $(o1).collision(o2);
      var collider2 = $(o2).collision(o1);
      if (collider2.length > 0) {
        var predator;
        var prey;
        if (parseInt(collider1[0].css('height')) > parseInt(collider2[0].css('height'))) {
          predator = collider1[0];
          prey = collider2[0];
        } else {
          prey = collider1[0];
          predator = collider2[0];
        }

        prey.remove();
        // predator.remove();
        // // var preysize = parseInt(prey.css('height'));
        // var size = predator.css('height') + preysize;
        // predator.css({height: size, width: size});
        return prey.css.attr('id');
      }
      return false;
    };

    var toRemove = [];

    for (var i = 0; i < window.dancers.length; i++) {
      for(var j = 0; j < window.dancers.length; j++) {
        if (window.dancers[i].$node.attr('id') !== window.dancers[j].$node.attr('id')) {
          var eaten = eat(window.dancers[i], window.dancers[j]);
          //console.log('eating');
          if (eaten !== false) {
            //toRemove.push(j);
            toRemove.push(eaten);
          }
        }
      }
    }

    for (var k = 0; k < toRemove.length; k++) {
      window.dancers.splice(toRemove[k], 1);
    };

  }, 50);

});

