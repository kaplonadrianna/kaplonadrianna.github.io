$(function(){

    'use strict';

    //wybieranie elementu z kolekcji za pomoca metody eq
    $('body').find("p").eq(2).css({"color": "green"});

    //petla each dodajaca do paragrafow klase z kolejnym numerem
    $("p").each(function(index) {

        $(this).addClass("pargraf-" + index);

    });

});