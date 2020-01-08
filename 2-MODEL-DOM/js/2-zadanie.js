// let btn = document.createElement('button')
// let text = document.createTextNode('Kliknij mnie')
// btn.appendChild(text)

// //pierwsza metoda dodawnia atrybutów
// //let classAtr = document.createAttribute("class")
// //classAtr.value = "mainbtn"

// //druga metoda dodawania atrybutów
// btn.setAttribute("class", "mainBtn")

// document.getElementById("maindiv").appendChild(btn)

// //displaynow
// //hidden

// let test = document.getElementById("mainP3").outerHTML

// console.log("TCL: test", test)

// let changeHref = document.getElementsByClassName('mainA')
// console.log("TCL: changeHref", changeHref)

// for (let i = 0; i < changeHref.length; i++) {
//     if (changeHref[i].innerHTML == "drugi link") {
//         changeHref[i].href = "https://www.onet.pl/"
//     }
// }

//dodanie CSS z poziomu JS

function pierwszyEvent() {
let changeClass = document.getElementsByClassName('pierwsza')
console.log("TCL: changeClass.className", changeClass[0].className)
changeClass[0].classList.add("druga")
}

// function pierwszyEvent() {
//     console.log("działa")
// }

document.getElementById("mainBtn").onclick = pierwszyEvent

function inputEvent() {
    let valueInput = document.getElementById("mainInput").value
    console.log(valueInput)
    document.getElementById("par4").innerHTML = valueInput
}

document.getElementById("mainInput").oninput = inputEvent

// function wkurzacz() {
//     alert(123)
// }

// document.getElementById("maindiv").addEventListener("click", wkurzacz)

// document.getElementById("maindiv").addEventListener("click", function (e) {
//     console.log(e)
//     alert(132)
// })

document.getElementById("wp").addEventListener("click", function (dzialanie) {
    dzialanie.preventDefault()
})