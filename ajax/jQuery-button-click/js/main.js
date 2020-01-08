
$(function() {

    $("#btn").on("click", Pobierz);

    function Pobierz() {


        $.getJSON(
        "https://jsonplaceholder.typicode.com/users/1",

        function(data) {

            let url = "https://jsonplaceholder.typicode.com/users/1"
            let user = data.id;
            let userName = data.name;
            

            $('body').append(`<p> User: ${user}<p>`);

            $('body').append(`<p> User Name: ${userName} <p>`);

            $('body').append(`<p> User URL: ${url} <p>`);

        });

    }

});




