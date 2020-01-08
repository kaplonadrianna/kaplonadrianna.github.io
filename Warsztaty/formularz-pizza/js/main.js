$(function () {

    let formPizzaOrder = $("#pizza-order"); 
    let firstName = $("#first-name");
    let lastName = $("#last-name");
    let street = $("#street");
    let streetNo = $("#street-no");
    let city = $("#city");
    let postCode = $("#post-code");
    let pizza = $("#pizza");
    let price = $("#price");
    let tomatoSauce = $("#tomato-sauce");
    let garlicSauce = $("#garlic-sauce");
    let agree = $("#agree");
    let errors = $("#errors");

    let priceTable = [
        {id: 1, price: 24}, //to jest obiekt
        {id: 2, price: 26},
        {id: 3, price: 28},
        {id: 4, price: 32},
        {id: 5, price: 29}
    ];

    pizza.change(function() {
        let pizzaPrice = 0;

        let pizzaType = $(this).val();
        
        if (pizzaType == 0) {
            price.text("O PLN");
            return;
        }

        priceTable.forEach(function(element){
            if (element.id == pizzaType) {
                pizzaPrice = element.price;
                price.text(pizzaPrice + " PLN");
            }
        });

        //to co wyzej w czystym java
        //let pizzaDom = document.getElementById("pizza");
        //pizzaDom.addEventListener('change', function() {
        //console.log(pizzaDom.value)

    });

    formPizzaOrder.submit(function() {

        errors.empty();

        let errorsArray = [];
        
        if ($.trim(firstName.val()) == "") {
            errorsArray.push("<li>" + "Uzupełnij pole: Imie" + "</li")
        }

        if ($.trim(lastName.val()) == "") {
            errorsArray.push("<li>" + "Uzupełnij pole: Nazwisko" + "</li")
        }

        if ($.trim(street.val()) == "") {
            errorsArray.push("<li>" + "Uzupełnij pole: Ulica" + "</li")
        }

        if ($.trim(streetNo.val()) == "") {
            errorsArray.push("<li>" + "Uzupełnij pole: Numer" + "</li")
        }

        if ($.trim(city.val()) == "") {
            errorsArray.push("<li>" + "Uzupełnij pole: Miasto" + "</li")
        }

        if ($.trim(postCode.val()) == "") {
            errorsArray.push("<li>" + "Uzupełnij pole: Kod pocztowy" + "</li")
        }

        if (pizza.val() == 0) {
        errorsArray.push("<li>" + "Uzupełnij pole: Pizza" + "</li")
        }

        if (!$("#agree").is(":checked")){
            errorsArray.push("<li>" + "Uzupełnij pole: Zgoda" + "</li")
        }
    
        if (errorsArray.length != 0) {
            errorsArray.forEach(function(element) {
                errors.append(element);
            });
        }

        let orderObject = {  //obiekt
            firstName: $.trim(firstName.val()),
            lastName: $.trim(lastName.val()),
            street: $.trim(street.val()),
            streetNo: $.trim(streetNo.val()),
            city: $.trim(city.val()),
            postCode: $.trim(postCode.val()),
            pizza: pizza.val(),
            sauce: [
                tomatoSauce.is(":checked"), garlicSauce.is(":checked")
            ],
        }

        console.log(JSON.stringify(orderObject));
        console.log(orderObject);

        return false;

    });

});









