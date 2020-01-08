$(function() {

    "use strict";

    //Efekt hide i show
    $("p").hide(3000).show(3000);

    //efekt fadeOut i fadeIn
    $("h1").fadeOut(3000).fadeIn(3000);

    //Funckja zwrotna animacji - tzw. callback
    function animacja() {
        console.log("Zaraz bd druga animacj");
        $("h3").animate({"font.size": "1em", "margin-left": "0px"}, 2000);
    }


    //efekt animacji z funckja zwrotna
    $("h3").animate({"font-size": "3em", "margin-left": "100px"}, 2000, animacja);

});