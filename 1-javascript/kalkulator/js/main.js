
function dodawanie(event) {
    console.log("działa");

    let cyfra1 = document.getElementById("cyfra1").value;
    let cyfra2 = document.getElementById("cyfra2").value;

    dodawanie=parseInt(cyfra1)+parseInt(cyfra2);
    document.getElementById("wynik").innerHTML = dodawanie;
  
    event.preventDefault()
   
    // return false;
}

let form = document.getElementById("dodaj");

form.addEventListener("submit",dodawanie);



