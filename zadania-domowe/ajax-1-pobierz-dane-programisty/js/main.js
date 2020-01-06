
$(function() {

    $("#btn").on("click", Pobierz);

    function Pobierz() {


        $.getJSON(
        "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",

        function(data) {

            let imie = data.imie;
            let nazwisko = data.nazwisko;
            let zawod = data.zawod;
            let firma = data.firma;
            
            $('body').append('<div id="dane-programisty"></div>');

            $('div').append(`<p> Imie: ${imie}<p>`);

            $('div').append(`<p> Nazwisko: ${nazwisko} <p>`);

            $('div').append(`<p> Zawód: ${zawod} <p>`);

            $('div').append(`<p> Firma: ${firma} <p>`);

        });

    }

});

