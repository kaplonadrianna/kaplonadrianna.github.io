$(document).ready(function(){

    //pobieranie tekstu
    var tekstParagrafuPierwszego = $('#paragraf').text();
    console.log(tekstParagrafuPierwszego);
    
    //dodawanie tekstu
    $(".paragraf").text("test");

    //dodawanie html
    $(".paragraf").html("To jest <strong>paragraf</strong> z dodanym <br> HTML");

    //dodawanie tresci na koncu selektora
    $(".paragrafnext").append("Treść na końcu selektora");

    //dodawanie treści za selektorem
    $(".paragrafnext").after("Treść za selektorem");

    //usuwanie elementu i jego zawartości 
    $(".paragraf").remove();

    //usuwanie tylko jego zawartości
    $("#paragraf").empty();

    //dodawanie css
    $(".paragrafnext").css({"font-size": "3em", "color": "red"});
    $(".paragrafnext").css("background-color", "green");

    //dodawanie klas
    $("h1").addClass("blue");

    //dodawanie atrybutu
    $("h1").attr("imie", "Marcin");

    //pobiera albo wstawia wartość do formularzy
    let niewiem = $("#niewiem");
    console.log(niewiem.val());

    niewiem.val("Karolina");

    let element = $("#element");
    console.log(element);

    element.text("Marta");
});