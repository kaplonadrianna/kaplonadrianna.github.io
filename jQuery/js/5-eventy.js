
//dom - czysty java script

//function klik() {
//    alert("niewiem");
//}

///var btnKlik = document.getElementById("klik");

//btnKlik.addEventListener("click", klik); //nie dajemy nawiasow do klika

// jQuery

$(function () {

    $("#klik").click(function () {
        $(this).css("color", "orange");
    });

});

    // drugi sposob 

    $('h1').on(
        {
            'mouseenter': function () {
                $(this).css("color", "pink");
            },

            'mouseleave': function () {
                $(this).css("color", "green");
            },

            'click': function () {
                $(this).css("color", "red");
            },
        }
    );
  