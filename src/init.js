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
      obj1 = "#" + obj1.$node.attr('id');
      obj2 = "#" + obj2.$node.attr('id');
      var predator = $(obj1).collision(obj2);
      var prey = $(obj2).collision(obj1);
      if (prey.length > 0) {
        console.log('collision!');
        prey.remove();

        // var preysize = parseInt(prey.css('height'));
        // var size = predator.css('height') + preysize;
        // predator.css({height: size, width: size});
        return true;
      }
      return false;
    };

    var toRemove = [];

    for (var i = 0; i < window.dancers.length; i++) {
      for(var j = 0; j < window.dancers.length; j++) {
        if (window.dancers[i].$node.attr('id') !== window.dancers[j].$node.attr('id')) {
          var eaten = eat(window.dancers[i], window.dancers[j]);
          //console.log('eating');
          if (eaten) {

            toRemove.push(j);
          }
        }
      }
    }

    for (var k = 0; k < toRemove.length; k++) {
      window.dancers.splice(toRemove[k], 1);
    };

  }, 50);

});

