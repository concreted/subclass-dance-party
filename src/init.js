$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
      //Math.random() * 20
    );
    window.dancers.push(dancer);
    $("body").append(dancer.$node);
  });

  $(".lineUpButton").on("click", function() {
    for (var i = 0; i < window.dancers.length; i++) {
      setInterval(window.dancers[i].lineUp.bind(window.dancers[i]), 250);
    }
  });

  $("body").on('mouseover', '.dancer', function() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var colorstring = 'rgb(' + r + ',' + g + ',' + b + ')';
    $(this).css('borderColor', colorstring);
    $(this).toggleClass('dancer-grow');
  });

});

