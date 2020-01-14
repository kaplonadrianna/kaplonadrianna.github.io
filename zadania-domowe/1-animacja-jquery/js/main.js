'use strict';

$(document).ready(function(){
 
  $("button").click(function(){

    $("div").animate({
          "height": "100px",
          "width": "100px",
          "left": "100px"
      }, 3000, colorChange);
    });

    function colorChange(){
      $("div").animate({
        backgroundColor: "green"
      }, 2000, function(){
        $("div").html("<h2>Animacja zakończona</h2>");
      });

    }
    
});

