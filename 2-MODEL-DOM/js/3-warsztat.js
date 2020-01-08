
function ustawTlo() {
    let mainParagraf = document.getElementsByTagName("p")
    mainParagraf[0].style.backgroundColor = "red"
    mainParagraf[1].style.backgroundColor = "yellow"

    console.log("TCL: ustawTlo -> mainParagraf", mainParagraf[0].style)
}

document.getElementById("UseDOM").onclick = ustawTlo


document.getElementById("UseListener").addEventListener("click", ustawTlo)