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
    var prey = $('.dancer-grow').collision('.dancer-small');
    prey.remove();
  }, 50);

});

